var materialApp = angular
.module('materialApp', [
    'materialApp.routes',
    'ui.router',
    'ngMaterial',
    'appCtrl',
    'cardsCtrl',
    'cardsService',
    'listCtrl',
    'userController',
    'listService',
    'tabsCtrl',
    'tabsService',
    'homeCtrl',
    'loginController',
    'loginService',
    'userData',
    'ngRoute',
    'directiveController',
    'userInfoWidget',
    'toastService',
    'allUsersController',
    'allUsersService'
]).config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('amber')
    .accentPalette('orange');
});