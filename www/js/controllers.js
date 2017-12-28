angular.module('starter.controllers', [])

  .controller('HomeCtrl', function ($scope, $state) {
    $scope.iconEditor = function () {
      $state.go('tab.chats');
    }
  })

  .controller('IconsCtrl', function ($scope, Chats, Icons, $state) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.iconSelector = function (args) {
      debugger
      switch (args.target.id) {
        case 'application':
          $scope.chats = Icons.applications();
          break;
        case 'banking':
          $scope.chats = Icons.bankings();
          break;
      }
    }
    $scope.icons = Icons.applications();
  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  })

  .controller('MyCtrl', function ($scope) {
    $scope.myTitle = 'Template';
  });
