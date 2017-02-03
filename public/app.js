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
    .icon("dark", 'img/more_dark.svg')
    .icon("light", 'img/more.svg')
    .icon("twitter", 'img/twitter.svg')
    .icon("facebook", 'img/facebook.svg')
    .icon("linkedin", 'img/linkedin.svg')
    .icon("snapchat", 'img/snapchat.svg')
    .icon("avatar", 'img/avatar.svg');
});