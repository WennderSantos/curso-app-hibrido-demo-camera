angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope, $state) {
    $scope.goTelaFoto = function () {
      $state.go('foto');
    };
  })

  .controller('ChatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
      Chats.remove(chat);
    };
  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  })
  .controller('fotoCtrl', function ($scope, $cordovaCamera) {
    $scope.tirarFoto = function () {
      var options = {
        "destinationType": Camera.DestinationType.FILE_URI
      };

      $cordovaCamera.getPicture(options).then(function (imageURI) {
        $scope.imagemSrc = imageURI;
      }, function (err) {
        // error
      });
    }
  })
  ;
