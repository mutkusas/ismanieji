angular.module('myApp', ['ngMaterial'])
  .controller('controller', ["$scope", "$rootScope", "$http", function ($scope, $rootScope, $http) {

    console.log('tekstas');
    $scope.players

    $http({
      url: "http://localhost:3001/players",
      method: "GET"
    }).then(function successCallback(response) {
      console.log("success");
      console.log("zaidejai:");
      $scope.players = response.data;
      console.log(response.data);
    }, function errorCallback(response) {
      console.log("fail");
      console.log(response);
    });
    console.log($scope.players);

    $scope.showAdvanced = function (ev) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'dialog1.tmpl.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
      })
        .then(function (answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function () {
          $scope.status = 'You cancelled the dialog.';
        });
    };
    
  }]);