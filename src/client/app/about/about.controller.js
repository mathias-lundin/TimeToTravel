(function () {

    'use strict';

    angular
        .module('app.about')
        .controller('AboutController', AboutController);

    AboutController.$inject = ['$state'];
    /* @ngInject */
    function AboutController($state) {
        var vm = this;
        vm.title = 'About';
    }

})();
