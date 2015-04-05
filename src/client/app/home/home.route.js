(function () {

    'use strict';

    angular
        .module('app.home')
        .run(runApp);

    runApp.$inject = ['routerHelper'];
    /* @ngInject */
    function runApp(routerHelper) {
        routerHelper.configureStates(getStates(), '/');
    }

    function getStates() {
        return [
            {
                state: 'home',
                config: {
                    url: '/',
                    templateUrl: 'app/home/home.html',
                    controller: 'HomeController',
                    controllerAs: 'vm',
                    title: 'Home',
                    settings: {
                        nav: 1,
                        content: 'Home'
                        //content: '<i class="fa fa-home"></i> Home'
                    }
                }
            }
        ];
    }

})();
