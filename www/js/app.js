// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'app.services'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            // setup an abstract state for the tabs directive
            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "templates/app.html"
            })

            .state('bootstrap', {
                url: "/bootstrap",

                templateUrl: 'templates/bootstrap.html',
                controller: "BootstrapCtrl"


            })

            .state('app.home', {
                url: "/home",
                views: {
                    'appContent': {
                        templateUrl: 'templates/home.html',
                        controller: "AppCtrl"
                    }
                }
            })

            .state('app.workstation', {
                url: "/workstation",
                views: {
                    'appContent': {
                        templateUrl: 'templates/workstation.html',
                        controller: "AppCtrl"
                    }
                }
            })


            .state('app.wifi', {
                url: "/wifi",
                views: {
                    'appContent': {
                        templateUrl: 'templates/wifi.html',
                        controller: "AppCtrl"
                    }
                }
            })

            .state('app.jabber', {
                url: "/jabber",
                views: {
                    'appContent': {
                        templateUrl: 'templates/jabber.html',
                        controller: "AppCtrl"
                    }
                }
            })

        ;

            // Each tab has its own nav history stack:

//            .state('home', {
//                url: '/home',
//                templateUrl: 'templates/home.html'
//            })





        // if none of the above states are matched, use this as the fallback
//        $urlRouterProvider.otherwise('/app/home');
        $urlRouterProvider.otherwise('bootstrap');

    });
