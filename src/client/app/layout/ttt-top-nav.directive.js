(function () {

    'use strict';

    angular
        .module('app.layout')
        .directive('tttTopNav', tttTopNav);

    /* @ngInject */
    function tttTopNav() {
        var directive = {
            bindToController: true,
            controller: TopNavController,
            controllerAs: 'vm',
            restrict: 'EA',
            scope: {
                'navItems': '=',
                'appTitle': '='
            },
            templateUrl: 'app/layout/ttt-top-nav.html'
        };

        function TopNavController() {
            var vm = this;
        }

        return directive;
    }

})();
