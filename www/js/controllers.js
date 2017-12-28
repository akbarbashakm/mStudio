angular.module('starter.controllers', [])

  .controller('HomeCtrl', function ($scope, $state) {
    $scope.iconEditor = function () {
      $state.go('tab.chats');
    }
  })

  .controller('LibraryCtrl', function ($scope, $state) {
    // Scope initialize
  })

  .controller('QuestionsCtrl', function ($scope, $state) {
    // Scope initialize
  })

  .controller('AboutCtrl', function ($scope, $state) {
    // Scope initialize
  })

  .controller('TutorialCtrl', function ($scope, $state) {
    // Scope initialize
  })
  .controller('IconEditorCtrl', function ($scope, $ionicPopup, $ionicLoading, $rootScope) {
    
    $scope.back = function() {
      window.history.back();
    }
    if ($rootScope.svg) {
      $scope.svg = $rootScope.svgData[$rootScope.svg.category][$rootScope.svg.index];
    } else {
      $scope.svg = {
        "path": "M15.334013,15.000001L16.667009,15.000001C17.220009,15.000001 17.667007,15.448001 17.667007,16.000002 17.667007,16.552002 17.220009,17.000002 16.667009,17.000002L15.334013,17.000002C14.781014,17.000002 14.334016,16.552002 14.334016,16.000002 14.334016,15.448001 14.781014,15.000001 15.334013,15.000001z M13.001023,14.000001L13.001023,18.000002 19.001024,18.000002 19.001024,14.000001z M15.109023,10.000001L13.120344,12.000001 19.001024,12.000001 19.001024,10.000001z M14.277023,8.000001L21.001024,8.000001 21.001024,20.000002 11.001023,20.000002 11.001023,11.295001z M5,4.000001L10,4.000001C10.553,4.000001 11,4.4480009 11,5.000001 11,5.552001 10.553,6.000001 10,6.000001L5,6.000001C4.447,6.000001 4,5.552001 4,5.000001 4,4.4480009 4.447,4.000001 5,4.000001z M2,2L2,22 30,22 30,6 16.543945,6C14.817017,6,13.334961,4.8259888,12.940918,3.1440125L12.672974,2z M1.7700195,0L12.911011,0C13.699951,0,14.385986,0.54400635,14.565918,1.3120117L14.887939,2.6879883C15.067993,3.4559937,15.754028,4,16.543945,4L30.22998,4C31.207031,4,32,4.7919922,32,5.769989L32,22.230011C32,23.208008,31.207031,24,30.22998,24L1.7700195,24C0.79199219,24,0,23.208008,0,22.230011L0,1.769989C0,0.79199219,0.79199219,0,1.7700195,0z",
        "name": "Folder Save",
        "tag": [
          "save",
          "store",
          "cover",
          "holder",
          "storage",
          "wireframe",
          "line icon"
        ],
        "id": "application_1"
      }
    }

  })
  .controller('IconsCtrl', function ($scope, Chats, Icons, $state, $http, $rootScope) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    $scope.search = function (args) {
      var icon = [];
      var value = args.target.value;
      if(value !== '') {
        for (var i = 0; i < $scope.icons.length; i++) {
          if ($scope.icons[i].tag.indexOf(value) > -1) {
            icon.push($scope.icons[i]);
          }
        }
        $scope.icons = icon;
      }
      
    }
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
        $scope.icons = $scope.iconsData.application;
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
          $scope.icons = $scope.iconsData.banking;
          break;
        case 'characters':
          $scope.icons = $scope.iconsData.characters();
          break;
        case 'educations':
          $scope.icons = $scope.iconsData.education;
          break;
        case 'election':
          $scope.icons = $scope.iconsData.election;
          break;
        case 'food':
          $scope.icons = $scope.iconsData.food;
          break;
        case 'medical':
          $scope.icons = $scope.iconsData.medical;
          break;
        case 'sports':
          $scope.icons = $scope.iconsData.sports;
          break;
        case 'transporations':
          $scope.icons = $scope.iconsData.transportation;
          break;
        case 'shoppings':
          $scope.icons = $scope.iconsData.shopping;
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
