(function () {

    'use strict';

    angular
        .module('app.layout')
        .directive('tttFooter', tttFooter);

    /* @ngInject */
    function tttFooter() {
        var directive = {
            bindToController: true,
            controller: FooterController,
            controllerAs: 'vm',
            restrict: 'E',
            scope: {
                'year': '='
            },
            templateUrl: 'app/layout/ttt-footer.html'
        };

        function FooterController() {
            var vm = this;
        }

        return directive;
    }

})();

