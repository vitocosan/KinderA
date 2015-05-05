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

  app.controller('galleryController',['$scope', function($scope){
    $scope.galleryTitle = "Presentacion de obra de Teatro";
    $scope.galleryDesc = "Galería de imagenes con fotos de los niños tomadas durante la Presentación de obra de Teatro. Lamentablemente no se pudo sacar una grupal, pero se tomaron varias.";
    $scope.galleryOne = [
      {img:'images/kinderA01/1.jpg', img_small:'images/kinderA01/1_small.jpg'},
      {img:'images/kinderA01/2.jpg', img_small:'images/kinderA01/2_small.jpg'},
      {img:'images/kinderA01/3.jpg', img_small:'images/kinderA01/3_small.jpg'},
      {img:'images/kinderA01/4.jpg', img_small:'images/kinderA01/4_small.jpg'},
      {img:'images/kinderA01/5.jpg', img_small:'images/kinderA01/5_small.jpg'},
      {img:'images/kinderA01/6.jpg', img_small:'images/kinderA01/6_small.jpg'},
      {img:'images/kinderA01/7.jpg', img_small:'images/kinderA01/7_small.jpg'},
      {img:'images/kinderA01/8.jpg', img_small:'images/kinderA01/8_small.jpg'},
      {img:'images/kinderA01/9.jpg', img_small:'images/kinderA01/9_small.jpg'},
      {img:'images/kinderA01/10.jpg', img_small:'images/kinderA01/10_small.jpg'},
      {img:'images/kinderA01/11.jpg', img_small:'images/kinderA01/11_small.jpg'},
      {img:'images/kinderA01/12.jpg', img_small:'images/kinderA01/12_small.jpg'},
      {img:'images/kinderA01/13.jpg', img_small:'images/kinderA01/13_small.jpg'},
      {img:'images/kinderA01/14.jpg', img_small:'images/kinderA01/14_small.jpg'},
      {img:'images/kinderA01/15.jpg', img_small:'images/kinderA01/15_small.jpg'}
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
    };
  });


})();
