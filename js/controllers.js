//Datos predeterminados//
app.controller("appController", function appController($scope){
	$scope.usuarios = [
        {
            nombre : "Joshua Aranda",
            telefono : "664-659-5788",
            edad : "24",
            profesion : "Desarrollador web"
        },
        {
            nombre : "Juan Manuel Marquez",
            telefono : "555-985-6935",
            edad : "39",
            profesion : "Boxeador"
        },
        {
            nombre : "Cain Velasquez",
            telefono : "619-827-2988",
            edad : "29",
            profesion : "MMA"
        }
    ]
})

app.controller("infoController", function infoController($scope,$routeParams){
	$scope.usuario = $scope.usuarios[$routeParams.id]; //Forma en que se manda un parámetro//
});

app.controller("addController", function addController($scope,$location){
	$scope.textButton = "Añadir un nuevo usuario";
	$scope.usuario = {};
	$scope.newUser = function(){
		$scope.usuarios.push($scope.usuario); //Magia sucede aquí, realiza una nueva captura.// 
		$location.url("/");
	}
})

app.controller("editController", function editController($scope,$routeParams,$location){
	$scope.textButton = "Editar usuario";
	$scope.usuario = $scope.usuarios[$routeParams.id];
	$scope.editUser = function(){
		$scope.usuarios[$routeParams.id] = $scope.usuario; //Traen los datos dependiendo del ID//
		$location.url("/");
	}
})

app.controller("removeController", function removeController($scope,$routeParams,$location){
	$scope.usuario = $scope.usuarios[$routeParams.id];
	$scope.removeUser = function(){
		$scope.usuarios.splice($routeParams.id, 1); //Magia sucede aquí, eliminando un valor.
		$location.url("/");
	}
})
