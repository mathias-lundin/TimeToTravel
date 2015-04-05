(function () {

    'use strict';

    var core = angular.module('app.core');

    core.config(toastrConfig);

    toastrConfig.$inject = ['toastr'];
    /* @ngInject */
    function toastrConfig(toastr) {
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-bottom-right';
    }

    var config = {
        appErrorPrefix: '[TimeToTravel Error]',
        appTitle: 'Time To Travel',
        imageBasePath: '/images/'
    };

    core.value('config', config);

    core.config(configure);

    configure.$inject = ['$compileProvider', '$logProvider', 'routerHelperProvider'];
    /* @ngInject */
    function configure($compileProvider, $logProvider, routerHelperProvider) {
        $compileProvider.debugInfoEnabled = false;

        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }

        configureStateHelper();

        function configureStateHelper() {
            routerHelperProvider.configure({
                docTitle: 'Time To Travel | ',
                resolveAlways: {}
            });
        }
    }

})();
