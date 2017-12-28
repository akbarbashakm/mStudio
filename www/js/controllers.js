angular.module('starter.controllers', [])

  .controller('HomeCtrl', function ($scope, $state) {
    $scope.iconEditor = function () {
      $state.go('tab.chats');
    }
  })
  .controller('IconEditorCtrl', function ($scope, $ionicPopup, $ionicLoading) {
    var lateCount = 0, temp;
    $scope.aviledLate = lateCount;
    temp = 2 - lateCount;
    $scope.balanceLate = temp < 0 ? 0 : temp;
  })
  .controller('IconsCtrl', function ($scope, Chats, Icons, $state, $http) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    $scope.customizeIcon = function(args) {
      $state.go('iconEditor');
    }
    var request = {
      method: 'get',
      url: './app.json',
      dataType: 'json',
      contentType: "application/json"
    };

    $scope.arrBirds = new Array;

    $http(request)
      .success(function (jsonData) {
        $scope.arrBirds = jsonData;
        $scope.list = $scope.arrBirds;
      })
      .error(function (args) {
      });

    $scope.iconSelector = function (args) {
      switch (args.target.id) {
        case 'application':
          $scope.icons = Icons.applications();
          break;
        case 'banking':
          $scope.icons = Icons.bankings();
          break;
        case 'characters':
          $scope.icons = Icons.characters();
          break;
        case 'educattions':
          $scope.icons = Icons.educattions();
          break;
        case 'election':
          $scope.icons = Icons.election();
          break;
        case 'food':
          $scope.icons = Icons.food();
          break;
        case 'medical':
          $scope.icons = Icons.medical();
          break;
        case 'sports':
          $scope.icons = Icons.sports();
          break;
        case 'transporations':
          $scope.icons = Icons.transporations();
          break;
        case 'shoppings':
          $scope.icons = Icons.shoppings();
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
