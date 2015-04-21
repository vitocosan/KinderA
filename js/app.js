(function(){
  var app = angular.module('kinder', ['smart-table']);

  app.controller('horarioController', ['$scope', function ($scope) {
      $scope.rowCollection = [
          {lunes: 'Saludo', martes: 'Saludo', miercoles: 'Saludo', jueves: 'Saludo', viernes: 'Saludo'},
          {lunes: 'Lectura Diaria', martes: 'Lectura Diaria', miercoles: 'Lectura Diaria', jueves: 'Lectura Diaria', viernes: 'Lectura Diaria'},
          {lunes: 'Ingles', martes: 'Ingles', miercoles: 'Ingles', jueves: 'Computación', viernes: 'Ingles'},
          {lunes: 'Colación', martes: 'Colación', miercoles: 'Colación', jueves: 'Colación', viernes: 'Colación'},
          {lunes: 'Patio', martes: 'Patio', miercoles: 'Patio', jueves: 'Patio', viernes: 'Patio'},
          {lunes: 'Ed Fisica', martes: 'Trabajo Personal', miercoles: 'Ed Física', jueves: 'Trabajo Pesonal', viernes: 'Trabajo Pesonal'},
          {lunes: 'Colación', martes: 'Colación', miercoles: 'Colación', jueves: 'Colación', viernes: 'Biblioteca'},
          {lunes: 'Patio', martes: 'Patio', miercoles: 'Patio', jueves: 'Patio', viernes: 'Patio'},
          {lunes: 'Trabajo Personal', martes: 'Estaciones', miercoles: 'Trabajo Personal', jueves: 'CREM', viernes: 'Estaciones'}
      ];
  }]);

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


})();
