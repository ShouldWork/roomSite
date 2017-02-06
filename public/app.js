var materialApp = angular
.module('materialApp', [
    'materialApp.routes',
    'ui.router',
    'ngMaterial',
    'appCtrl',
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
    'userInfoWidget',
    'toastService',
    'allUsersController',
    'allUsersService',
    'ngAnimate'
]).config(function($mdThemingProvider, $mdIconProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('grey')
    .accentPalette('light-green');
   $mdIconProvider
    .icon("dark", 'img/more_dark.svg')
    .icon("light", 'img/more.svg')
    .icon("twitter", 'img/twitter.svg')
    .icon("facebook", 'img/facebook.svg')
    .icon("linkedin", 'img/linkedin.svg')
    .icon("snapchat", 'img/snapchat.svg')
    .icon("avatar", 'img/avatar.svg')
    .icon("contact", 'img/contact.svg')
    .icon("back", 'img/back.svg')
    .icon("left-arrow-black", 'img/left-arrow-black.svg')
    .icon("left-arrow-white", 'img/left-arrow-white.svg')
    .icon("phone", 'img/phone-call.svg')
    .icon("house-outline", 'img/house-outline.svg');
});