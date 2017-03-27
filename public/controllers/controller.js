
// initialize angular app
const myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function ($scope, $http){
	console.log ('controller is working');

// getting my data from mongo
$http({
	method: 'GET',
	url: '/'
	}).then(function successCallback(response){
		console.log('successful mongo to angular');
		$scope.flerbList = response;
	}, function errorCallback(response){
		console.log('error');

});



//end myApp
}]);