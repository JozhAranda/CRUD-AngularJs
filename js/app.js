//crea el modulo llamado 'app'
var app = angular.module("app", []);

//las rutas de la aplicación
app.config(function($routeProvider){
	$routeProvider.when("/", {
		templateUrl : "tmp/index.html"
	})
	.when('/show/:id', {
      templateUrl : "tmp/show.html",
     controller : "infoController"
    })
	.when("/create", {
		title: 'Añadir usuario',
		templateUrl : "tmp/create.html",
		controller : "addController"
	})
	.when("/edit/:id", {
		title: 'Editar usuario',
		templateUrl : "tmp/edit.html",
		controller : "editController"
	})
 	.when("/delete/:id", {
 		title: 'Eliminar usuario',
 		templateUrl : "tmp/delete.html",
 		controller : "removeController"
 	})
 	.otherwise({ redirectTo : "/"})
})
