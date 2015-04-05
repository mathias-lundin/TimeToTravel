(function () {

    'use strict';

    angular
        .module('blocks.router')
        .provider('routerHelper', routerHelperProvider);

    routerHelperProvider.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];
    /* @ngInject */
    function routerHelperProvider($locationProvider, $stateProvider, $urlRouterProvider) {
        var self = this,
            config = {
            docTitle: undefined,
            resolveAlways: {}
        };

        $locationProvider.html5Mode(true);

        self.configure = function(cfg) {
            angular.extend(config, cfg);
        };

        self.$get = RouterHelper;
        RouterHelper.$inject = ['$location', '$rootScope', '$state'];
        /* @ngInject */
        function RouterHelper($location, $rootScope, $state) {
            var handlingStateChangeError = false,
                hasOtherwise = false,
                stateCounts = {
                    errors: 0,
                    changes: 0
                };

            var service = {
                configureStates: configureStates,
                getStates: getStates,
                stateCounts: stateCounts
            };

            init();

            return service;

            function configureStates(states, otherwisePath) {
                states.forEach(function (state) {
                    state.config.resolve =
                        angular.extend(state.config.resolve || {}, config.resolveAlways);
                    $stateProvider.state(state.state, state.config);
                });
                if (otherwisePath && !hasOtherwise) {
                    hasOtherwise = true;
                    $urlRouterProvider.otherwise(otherwisePath);
                }
            }

            function handleRoutingErrors() {
                $rootScope.$on('$stateChangeError',
                    function (event, toState, toParams, fromState, fromParams, error) {
                        if (handlingStateChangeError) {
                            return;
                        }

                        stateCounts.errors++;
                        handlingStateChangeError = true;
                        $location.path('/');

                        // TODO logging
                    });
            }

            function init() {
                handleRoutingErrors();
                updateDocTitle();
            }

            function getStates() {
                return $state.get();
            }

            function updateDocTitle() {
                $rootScope.$on('$stateChangeSuccess',
                    function (event, toState, toParams, fromState, fromParams) {
                        stateCounts.changes++;
                        handlingStateChangeError = false;
                        var title = config.docTitle + ' ' + (toState.title || '');
                        $rootScope.title = title;
                    });
            }
        }
    }

})();
