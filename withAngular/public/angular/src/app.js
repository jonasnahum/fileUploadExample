(function () {
    var app = angular.module('fileUpload', ['ngRoute', 'ngFileUpload']);
    
    app.config(["$routeProvider", function ($router) {

        $router.when("/", { templateUrl: "angular/views/vista1.html"})
        .when("/vista2", { templateUrl: "angular/views/vista2.html"})
        .otherwise({ redirectTo: "/" });
    }]);
    
})();