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
      templateUrl: "directive/header-options.html",
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

  app.directive("sectionFooter", function(){
    return{
      restrict: 'E',
      templateUrl: "directive/section-footer.html",
      controllerAs: 'MenuOptions',
      controller: function(){
        this.menu_items = menu_options;
      }
    };
  });

  var menu_options = [
    {
        "name": "Home",
        "url":"index.html"
    },
    {
        "name": "Quienes Somos",
        "url":"about.html"
    },
    {
        "name": "Galeria",
        "url":"gallery.html"
    },
    {
        "name": "Blog",
        "url":"blog.html"
    },
    {
        "name": "Contacto",
        "url":"contact.html"
    }
  ];

})();
