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
      var selectedCulture, arrayName;
      selectedCulture = $("#menu1").text().toLowerCase();
      selectedCulture = selectedCulture.replace(/\s+/g, '');
      switch (selectedCulture) {
          case "english":
              arrayName = english;
              break;
          case "germany":
              arrayName = germany;
              break;
          case "french":
              arrayName = french;
              break;
          case "arabic":
              arrayName = arabic;
              break;
      }
      for (i = 1; i < 8; i++) {
          $("#text" + i).text(arrayName[i].text);
      }
  })

  .controller('AboutCtrl', function ($scope, $state) {
      // Scope initialize
      var selectedCulture, arrayName;
      selectedCulture = $("#menu1").text().toLowerCase();
      selectedCulture = selectedCulture.replace(/\s+/g, '');
      switch (selectedCulture) {
          case "english":
              arrayName = english;
              break;
          case "germany":
              arrayName = germany;
              break;
          case "french":
              arrayName = french;
              break;
          case "arabic":
              arrayName = arabic;
              break;
      }
      for (i = 1; i < 8; i++) {
          $("#text" + i).text(arrayName[i].text);
      }
  })

  .controller('TutorialCtrl', function ($scope, $state) {
      // Scope initialize
      var selectedCulture, arrayName;
      selectedCulture = $("#menu1").text().toLowerCase();
      selectedCulture = selectedCulture.replace(/\s+/g, '');
      switch (selectedCulture) {
          case "english":
              arrayName = english;
              break;
          case "germany":
              arrayName = germany;
              break;
          case "french":
              arrayName = french;
              break;
          case "arabic":
              arrayName = arabic;
              break;
      }
      for (i = 1; i < 8; i++) {
          $("#text" + i).text(arrayName[i].text);
      }
  })
  .controller('CustomEditorCtrl', function ($scope, $ionicPopup, $ionicLoading, $rootScope) {
      var selectedCulture, arrayName;
      selectedCulture = $("#menu1").text().toLowerCase();
      selectedCulture = selectedCulture.replace(/\s+/g, '');
      switch (selectedCulture) {
          case "english":
              arrayName = english;
              break;
          case "germany":
              arrayName = germany;
              break;
          case "french":
              arrayName = french;
              break;
          case "arabic":
              arrayName = arabic;
              break;
      }
      for (i = 1; i < 8; i++) {
          $("#text" + i).text(arrayName[i].text);
      }
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
    var selectedCulture, arrayName;
    selectedCulture = $("#menu1").text().toLowerCase();
    selectedCulture = selectedCulture.replace(/\s+/g, '');
    switch (selectedCulture) {
        case "english":
            arrayName = english;
            break;
        case "germany":
            arrayName = germany;
            break;
        case "french":
            arrayName = french;
            break;
        case "arabic":
            arrayName = arabic;
            break;
    }
    for (i = 1; i < 8; i++) {
         $("#text" + i).text(arrayName[i].text);
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
    $scope.hide = true;
    $scope.submit = function () {
      var category = [
        'application',
        'banking',
        'people',
        'education',
        'election',
        'food',
        'medical',
        'sports',
        'transportation',
        'shopping'
      ];
      var icon = [];
      var value = document.getElementById('search').value;
      if(value !== '') {
        for (var j=0; j< category.length; j++) {
          for (var i = 0; i < $scope.iconsData[category[j]].length; i++) {
            if ($scope.iconsData[category[j]][i].tag.indexOf(value) > -1) {
              icon.push($scope.iconsData[category[j]][i]);
            }
          }
        }
        if (icon.length) {
          $scope.hide = false;
          $scope.icons = icon;
        } else {
          document.getElementById('search').value = '';
        }
        
      }
      
    }

    $scope.reset = function () {
      document.getElementById('search').value = '';
      $scope.icons = $scope.iconsData.application;
      $scope.hide = true;
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
        $scope.icons = window.svgIcons.application;
      });
      $scope.icons = window.svgIcons.application;

    $scope.iconSelector = function (args) {
      var elements = document.getElementsByClassName('active');
      elements[0].setAttribute('class', '');
      args.target.parentElement.setAttribute('class', 'active');
      $scope.iconsData = $scope.iconsData || window.svgIcons;
      switch (args.target.id) {
        case 'application':
          $scope.icons = $scope.iconsData.application;
          break;
        case 'banking':
          $scope.icons = $scope.iconsData.banking;
          break;
        case 'people':
          $scope.icons = $scope.iconsData.people;
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
    var selectedCulture, arrayName;
    selectedCulture = $("#menu1").text().toLowerCase();
    selectedCulture = selectedCulture.replace(/\s+/g, '');
    switch (selectedCulture) {
        case "english":
            arrayName = english;
            break;
        case "germany":
            arrayName = germany;
            break;
        case "french":
            arrayName = french;
            break;
        case "arabic":
            arrayName = arabic;
            break;
    }
    for (i = 12; i < 30; i++) {
        if (i <= 19)
            $("#text" + i).text(arrayName[i].text);
        else
            $(".text" + i).text(arrayName[i].text);
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
