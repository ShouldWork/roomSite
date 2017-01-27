var materialApp = angular
.module('materialApp', [
    'materialApp.routes',
    'ui.router',
    'ngMaterial',
    'appCtrl',
    'cardsCtrl',
    'cardsService',
    'listCtrl',
    'listService',
    'tabsCtrl',
    'tabsService',
    'loginController'
]).config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('amber')
    .accentPalette('orange');
});