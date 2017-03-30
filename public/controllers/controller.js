
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
			//console.log('successful mongo to angular', response);
			$scope.flerbs = response.data.flerbs;
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
//        DELETE A FLERB 

$scope.deleteFlerb = function(flerb){
	console.log('Are you sure you want to delete?', $scope.flerb);
	$http({
		method: 'DELETE',
		url: '/flerb/' + flerb._id,
		data: flerb
	}).then(function successCallback(response){
		console.log('you deleted the flerb!');
		refresh();
	}, function errorCallback(response){
		console.log('flerb deletion failed', response);
	});
}

//        -- EDIT A FLERB
//get it by id first and move to the input form
$scope.editFlerb = function(flerb) {
	console.log('$scope.flerb');
	$http({
		method: 'GET',
		url: '/flerb/' + flerb._id,
		data: flerb
	}).then(function successCallback(response){
		console.log('editing flerb need to see', response);
		//$scope.flerb = response.data;
	}, function errorCallback(response){
		console.log('editFlerb failed', response);
	});

}
//put request next
$scope.updateFlerb = function(flerb){
	console.log('we are editing a flerb');
	$http({
		method: 'PUT',
		url: '/flerb/' + flerb._id,
		data: flerb
	}).then(function successCallback(response){
		console.log('flerb edit successful!');
		refresh();
	}, function errorCallback(response){
		console.log('flerb edit failed');
	});
}



//end myApp
}]);