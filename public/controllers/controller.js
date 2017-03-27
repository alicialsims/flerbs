
// initialize angular app
const myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function ($scope, $http){
	console.log ('controller is working');
}]);