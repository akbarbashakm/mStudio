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
    $scope.customizeIcon = function (args) {
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
        $scope.iconsData = jsonData;
      })
      .error(function (args) {
        console.log(args)
      });

    $scope.iconSelector = function (args) {
      switch (args.target.id) {
        case 'application':
          $scope.icons = $scope.iconsData.appIcons;
          break;
        case 'banking':
          $scope.icons = $scope.iconsData.bankIcons;
          break;
        case 'characters':
          $scope.icons = $scope.iconsData.characters();
          break;
        case 'educattions':
          $scope.icons = $scope.iconsData.educattions();
          break;
        case 'election':
          $scope.icons = $scope.iconsData.election();
          break;
        case 'food':
          $scope.icons = $scope.iconsData.food();
          break;
        case 'medical':
          $scope.icons = $scope.iconsData.medical();
          break;
        case 'sports':
          $scope.icons = $scope.iconsData.sports();
          break;
        case 'transporations':
          $scope.icons = $scope.iconsData.transporations();
          break;
        case 'shoppings':
          $scope.icons = $scope.iconsData.shoppings();
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
