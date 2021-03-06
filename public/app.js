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
    'ngAnimate',
    'recentPostsController',
    'postService'
]).config(function($mdThemingProvider, $mdIconProvider) {
//   $mdThemingProvider.theme('default')
//     .primaryPalette('white')
//     .accentPalette('indigo');
    // .dark();
$mdThemingProvider.disableTheming();

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
    .icon("house-outline", 'img/house-outline.svg')
    .icon("email", 'img/email.svg')
    .icon("cancel", 'img/cancel.svg')
    .icon("search", 'img/search.svg');
});