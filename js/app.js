(function(){
  var app = angular.module('kinder', []);

/*  app.controller("MenuController", function() {
    this.menu = 1;

    this.isSet = function(checkMenu) {
      return this.menu === checkMenu;
    };

    this.setTab = function(setMenu) {
      this.menu = setMenu;
    };
  });
*/

  app.directive("headerOptions", function(){
    return {
      restrict: 'E',
      templateUrl: "js/header-options.html",
      scope:{
        menu: "="
      },
      controller: function($scope){
        $scope.menu = 1;

        $scope.isSet = function(checkMenu) {
          return $scope.menu === checkMenu;
        };

        $scope.setTab = function(setMenu) {
          $scope.menu = setMenu;
        };
      }
    };
  });

})();
