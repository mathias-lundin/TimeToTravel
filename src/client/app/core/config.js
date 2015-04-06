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

    var imageBasePath = '/images',
        config = {
        appErrorPrefix: '[TimeToTravel Error]',
        appTitle: 'Time To Travel',
        imageBasePath: imageBasePath,
        //TODO move elsewhere?
        links: {
            github: {
                icon: imageBasePath + '/GitHub-Mark-Light-32px.png',
                title: 'Visit us on GitHub',
                url: 'https://github.com/mathias-lundin/TimeToTravel'
            }
        }
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
