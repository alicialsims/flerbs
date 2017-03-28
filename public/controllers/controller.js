
// initialize angular app
const myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function ($scope, $http){
	console.log ('controller is working');

//refresh the page after input (getting)
const refresh = ()=> {
	// getting my data from mongo
	$http({
		method: 'GET',
		url: '/flerbs'
		}).then(function successCallback(response){
			console.log('successful mongo to angular', response);
			$scope.flerbs = response.data.flerbs;
			//clear input form
			//$scope.flerbs
		}, function errorCallback(response){
			console.log('error receiving data from db');
	});
}

refresh();

// Post request - addFlerb() send input form data to db

$scope.addFlerb = function(){
	console.log($scope.flerb);
	$http({
		method: 'POST',
		url: '/flerb',
		data: $scope.flerb
	}).then(function successCallback(response){
		//test response
		//clear input
		$scope.flerb = {};
	 console.log(response);
	 console.log('put response working in angular');
	 refresh();
	}, function errorCallback(response){
		console.log('error sending input form data to db');
	});
}



//end myApp
}]);