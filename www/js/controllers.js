angular.module('starter.controllers', [])

  .controller('HomeCtrl', function ($scope, $state) {
    $scope.iconEditor = function () {
      $state.go('tab.chats');
    }
  })
  .controller('IconEditorCtrl', function ($scope, $ionicPopup, $ionicLoading, $rootScope) {
    $scope.svg = $rootScope.svgData[$rootScope.svg.category][$rootScope.svg.index];
  })
  .controller('IconsCtrl', function ($scope, Chats, Icons, $state, $http, $rootScope) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    $scope.customizeIcon = function (args) {
      var elem = args.target.parentElement = args.target.parentElement.id.split('_');
      $rootScope.svg = {
        category: elem[0],
        index: elem[1]
      };
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
        $rootScope.svgData = jsonData;
      })
      .error(function (args) {
        console.log(args)
      });

    $scope.iconSelector = function (args) {
      switch (args.target.id) {
        case 'application':
          $scope.icons = $scope.iconsData.application;
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
