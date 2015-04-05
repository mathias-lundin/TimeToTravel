(function () {

    'use strict';

    angular
        .module('app.layout')
        .controller('ShellController', ShellController);

    ShellController.$inject = ['config'];
    /* @ngInject */
    function ShellController(config) {
        var vm = this;

        vm.appTitle = config.appTitle;
        vm.navItems = [
            {text: 'Home', link: '/'},
            {text: 'About', link: '/about'},
            {text: 'Contact', link: '/contact'}
        ];
        vm.year = moment().year();

        //activate();

        function activate() {
            // TODO log
        }
    }

})();
