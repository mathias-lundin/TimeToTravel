(function () {

    'use strict';

    angular
        .module('app.about')
        .run(runApp);

    runApp.$inject = ['routerHelper'];
    /* @ngInject */
    function runApp(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'about',
                config: {
                    url: '/about',
                    templateUrl: 'app/about/about.html',
                    controller: 'AboutController',
                    controllerAs: 'vm',
                    title: 'About',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-group"></i> About'
                    }
                }
            }
        ];
    }

})();
