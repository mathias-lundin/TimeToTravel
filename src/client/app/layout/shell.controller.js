(function () {

    'use strict';

    angular
        .module('app.layout')
        .controller('ShellController', ShellController);

    ShellController.$inject = ['config'];
    /* @ngInject */
    function ShellController(config) {
        var vm = this;

        vm.title = config.appTitle;
        /*vm.menuItems = [
            {text: 'Home', link: '/'},
            {text: 'About', link: '/about'},
            {text: 'Contact', link: '/contact'}
        ];*/

        activate();

        function activate() {
            // TODO log
        }
    }

})();
