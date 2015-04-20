(function(){
  var app = angular.module('kinder', []);

  app.controller("BulletController", function() {
    this.bullets = image_bullets;
  });


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

  var image_bullets = [
  	{
  		"src" : "images/wowslider/01.png",
  		"alt" : "This is the title",
  		"title" : "This is the title",
  		"id" : "wows1_0",
  		"description" : "And this is description"
  	},
  	{
  		"src" : "images/wowslider/02.png",
  		"alt" : "Another title",
  		"title" : "Another title",
  		"id" : "wows1_1",
  		"description" : "And another description"
  	},
  	{
  		"src" : "images/wowslider/03.png",
  		"alt" : "Third title",
  		"title" : "With third description",
  		"id" : "wows1_2",
  		"description" : "And another description"
  	}
  ];

})();
