// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

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
      .state('tab', {
        cache: false,
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      // Each tab has its own nav history stack:

      .state('tab.dash', {
        url: '/dash',
        cache: false,
        views: {
          'tab-dash': {
            templateUrl: 'templates/tab-dash.html',
            controller: 'HomeCtrl'
          }
        }
      })

      .state('tab.chats', {
        url: '/chats',
        cache: false,
        views: {
          'tab-chats': {
            templateUrl: 'templates/tab-chats.html',
            controller: 'IconsCtrl'
          }
        }
      })
      .state('tab.chat-detail', {
        url: '/chats/:chatId',
        cache: false,
        views: {
          'tab-chats': {
            templateUrl: 'templates/chat-detail.html',
            controller: 'ChatDetailCtrl'
          }
        }
      }).state('iconEditor', {
        url: '/iconEditor',
        cache: false,
        templateUrl: 'templates/iconEditor.html',
        controller: 'IconEditorCtrl'
      }).state('library', {
        url: '/library',
        cache: false,
        templateUrl: 'templates/library.html',
        controller: 'LibraryCtrl'
      }).state('tutorial', {
        url: '/tutorial',
        cache: false,
        templateUrl: 'templates/tutorial.html',
        controller: 'TutorialCtrl'
      }).state('questions', {
        url: '/questions',
        cache: false,
        templateUrl: 'templates/questions.html',
        controller: 'QuestionsCtrl'
      }).state('about', {
        url: '/about',
        cache: false,
        templateUrl: 'templates/about.html',
        controller: 'AboutCtrl'
      }).state('customEditor', {
        url: '/customEditor',
        cache: false,
        templateUrl: 'templates/customEditor.html',
        controller: 'CustomEditorCtrl'
      })

      .state('tab.account', {
        url: '/account',
        cache: false,
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-account.html',
            controller: 'AccountCtrl'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/dash');

  });
