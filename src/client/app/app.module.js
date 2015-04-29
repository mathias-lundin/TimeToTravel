/// <reference path="../../../typings/angularjs/angular.d.ts"/>

(function () {

    'use strict';

    angular
        .module('app', [
        /* Shared modules */
        'app.core',

        /* Feature areas */
        'app.home',
        'app.about',
        'app.layout'
    ]);

})();
