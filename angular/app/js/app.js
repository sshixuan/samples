'use strict';

/* App Module */

var app = angular.module('demo', [
        'ui.router', 
        'controllers',
        'subcontrollers',
        'services',
]);

/* Config */

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home',{
        url: '/',
        views: {
            'header': {
                templateUrl: 'templates/header.html'
            },
            'content': {
                templateUrl: 'templates/content.html',
                controller: 'contentCtrl', 
            },
        }
    })
 
    .state('home.dashboard', {
        url: 'dashboard',
        views: {
            'content@': {
                templateUrl: 'templates/dashboard.html',
                controller: 'dashboardCtrl',
            }
        }
 
    })
 
    .state('home.campaigns', {
        url: 'campaigns',
        views: {
            'content@': {
                templateUrl: 'templates/campaigns.html',
                controller: 'campaigns',
            }
        }
 
    })
 
    .state('home.subscribers', {
        url: 'subscribers',
        views: {
            'content@': {
                templateUrl: 'templates/subscribers.html',
                controller: 'subscribers', 
            }
        }
    })
    .state('home.subscribers.queryAll', {
        url: '/topos/',
        views: {
            'views@home.subscribers': {
                templateUrl: 'templates/subscriber-table.html',
                controller: 'queryAll', 
            }
        }
    })
    .state('home.subscribers.create', {
        url: '/topos/',
        views: {
            'views@home.subscribers': {
                templateUrl: 'templates/subscriber-create.html',
                controller: 'create', 
            }
        }
    })
    .state('home.subscribers.update', {
        url: '/topos/:id',
        views: {
            'views@home.subscribers': {
                templateUrl: 'templates/subscriber-update.html',
                controller: 'update', 
            }
        }
    })
    .state('home.subscribers.delete', {
        url: '/topos/:id',
        views: {
            'views@home.subscribers': {
                templateUrl: 'templates/subscriber-delete.html',
                controller: 'delete', 
            }
        }
    })
    .state('home.subscribers.result', {
        url: '/result',
        views: {
            'views@home.subscribers': {
                templateUrl: 'templates/subscriber-result.html',
            }
        }
    });
 
}]);

