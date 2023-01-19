// ANGULARJS

var app = angular.module("natureApp", ["ngRoute"]);

    app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "nature.html"
    })
    .when("/winter", {
        templateUrl : "winter.html"
    })
    .when("/spring", {
        templateUrl : "spring.html"
    })
    .when("/summer", {
        templateUrl : "summer.html"
    })
    .when("/mountain", {
        templateUrl : "mountain.html"
    })
    .when("/forest", {
        templateUrl : "forest.html"
    });



});
