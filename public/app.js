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
]).config(function($mdThemingProvider, $mdIconProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('amber')
    .accentPalette('orange');
   $mdIconProvider
    .iconSet("dark", 'img/more_dark.svg')
    .iconSet("light", 'img/more.svg')
});