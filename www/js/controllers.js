angular.module('starter.controllers', [])

    .controller('BootstrapCtrl',
    ['$scope', 'CacheService', '$state',
        function ($scope, CacheService, $state) {
            $scope.name = 'bootstrap';

            var cachedView = JSON.parse(CacheService.localStorage.read('view'));

            if (cachedView) {

                $state.go(cachedView.stateId);

            }
            else{

                $state.go("app.home");

            }

        }])
    .controller('AppCtrl',
    ['$scope', '$timeout', '$ionicLoading', '$ionicHistory', 'CacheService',
        function ($scope, $timeout, $ionicLoading, $ionicHistory, CacheService) {

            // cache the current view.

            var view = $ionicHistory.currentView();
            var cachedView = JSON.parse(CacheService.localStorage.read('view'));


            if (cachedView) {

                if (view != cachedView) {

                    CacheService.localStorage.write('view', JSON.stringify(view));

                }

            }
            else {

                CacheService.localStorage.write('view', JSON.stringify(view));

            }


            console.log($ionicHistory.currentView()); // todo: delete me

            $scope.isOn = false;

            $scope.turnOff = function () {

                $ionicLoading.show({

                    "template": "Powering down workstation.  Please wait..."

                });

                $timeout(function () {

                    $ionicLoading.hide();

                    $scope.isOn = false;

                }, 3000);

            };

            $scope.turnOn = function () {

                $ionicLoading.show({

                    "template": "Powering on workstation.  Please wait..."

                });

                $timeout(function () {

                    $ionicLoading.hide();

                    $scope.isOn = true;

                }, 3000);

            };

        }])

;


//.controller('DashCtrl', function($scope) {})
//
//.controller('ChatsCtrl', function($scope, Chats) {
//  $scope.chats = Chats.all();
//  $scope.remove = function(chat) {
//    Chats.remove(chat);
//  }
//})
//
//.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
//  $scope.chat = Chats.get($stateParams.chatId);
//})
//
//.controller('FriendsCtrl', function($scope, Friends) {
//  $scope.friends = Friends.all();
//})
//
//.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
//  $scope.friend = Friends.get($stateParams.friendId);
//})
//
//.controller('AccountCtrl', function($scope) {
//  $scope.settings = {
//    enableFriends: true
//  };
//});
