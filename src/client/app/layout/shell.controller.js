(function () {

    'use strict';

    angular
        .module('app.layout')
        .controller('ShellController', ShellController);

    ShellController.$inject = ['config'];
    /* @ngInject */
    function ShellController(config) {
        var vm = this;

        vm.year = moment().year();

        //activate();

        function activate() {
            // TODO log
        }
    }

})();
