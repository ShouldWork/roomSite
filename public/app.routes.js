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
        .state('cards', {
            url: '/cards',
            templateUrl: '/modules/cards/views/cards.html',
            controller: 'cardsCtrl',
            controllerAs: 'Cards',
            params: {
                title: "Peeps",
                content: "This is to show different cards and layouts."
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
        .state('login',{
            url: '/login',
            templateUrl: '/modules/login/view/login.view.html',
            controller: 'loginController',
            controllerAs: 'loginCtrl'
        })
        .state('peeps',{
            url: '/peeps:userId',
            templateUrl: '/modules/user/view/userView.html',
            controller: 'userController',
            controllerAs: 'userCtrl'
        })

    $locationProvider.html5Mode(true);

});