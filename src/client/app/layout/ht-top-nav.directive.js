(function () {

    'use strict';

    angular
        .module('app.layout')
        .directive('htTopNav', htTopNav);

    /* @ngInject */
    function htTopNav() {
        var directive = {
            bindToController: true,
            controller: TopNavController,
            controllerAs: 'vm',
            restrict: 'EA',
            scope: {
                'navItems': '=',
                'appTitle': '='
            },
            templateUrl: 'app/layout/ht-top-nav.html'
        };

        function TopNavController() {
            var vm = this;
        }

        return directive;
    }

})();
