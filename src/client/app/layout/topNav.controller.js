(function () {

    'use strict';

    angular
        .module('app.layout')
        .controller('TopNavController', TopNavController);

    TopNavController.$inject = ['$state', 'routerHelper', 'config'];
    /* @ngInject */
    function TopNavController($state, routerHelper, config) {
        var vm = this,
            states = routerHelper.getStates();

        vm.appTitle = config.appTitle;
        vm.isCurrent = isCurrent;

        activate();

        function activate() {
            getNavItems();
        }

        function getNavItems() {
            vm.navItems = states.filter(function (state) {
                return state.settings && state.settings.nav;
            }).sort(function (left, right) {
                return left.settings.nav - right.settings.nav;
            });
        }

        function isCurrent(route) {
            if (!route.title || $state.current || $state.current.title) {
                return '';
            }

            var menuName = route.title;

            return $state.current.title.substr(0, menuName.length) === menuName ? 'current' : '';
        }
    }

})();
