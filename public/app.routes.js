var router = angular.module('materialApp.routes', ['ui.router']);
router.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');

    // UI Router States
    // Inserting Page title as State Param
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/modules/home/views/home.html',
            controller: 'homeCtrl',
            controllerAs: 'Home',
            params: {
                title: "RoomSite",
                content:"This is some regular stuff to talk about!"
            }
        })
        .state('peeps', {
            abstract: true,
            url: '/peeps',
            templateUrl: '/modules/users/usersDefault.html'
        })
        .state('peeps.details', {
            url:'/userDetails/:userId',
            templateUrl: '/modules/users/userDetail/views/userDetail.html',
            controller: 'userController',
            controllerAs:'User'
        })
        .state('peeps.profile', {
            url:'/userProfile',
            templateUrl: '/modules/users/userProfile/views/userProfile.html'
        })
        .state('peeps.allUsers', {
            url:'/allUsers',
            templateUrl: '/modules/users/allUsers/views/allUsers.html',
            controller: 'allUsersController',
            controllerAs: "allUsers",
            params: {
                title: 'All da\' peeps' 
            }
        })
        .state('list', {
            url: '/list',
            templateUrl: '/modules/list/views/list.html',
            controller: 'listCtrl',
            controllerAs: 'List',
            params: {
                title: "Objectives",
                content: "More examples of different layouts."
            }
        })
        .state('tabs', {
            url: '/tabs',
            templateUrl: '/modules/tabs/views/tabs.html',
            controller: 'tabsCtrl',
            controllerAs: 'Tabs',
            params: {
                title: "Duties",
                content: "Something super special"

            }
        })
        .state('default',{
            url:'/',
            templateUrl: '/modules/home/views/home.html',
            controller: 'homeCtrl',
            controllerAs: 'Home',
            params: {
                title: "RoomSite",
                content:"This is some regular stuff to talk about!"
            }
        })
        .state('directive',{
            url:'/directive',
            templateUrl:'modules/directives/sampleDirective.html',
            controller: 'directiveController'
        })

    $locationProvider.html5Mode(true);

});