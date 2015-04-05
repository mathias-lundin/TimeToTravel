(function () {

    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$state'];
    /* @ngInject */
    function HomeController($state) {
        var vm = this;
        vm.title = 'Home';
    }

})();
