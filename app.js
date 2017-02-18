var contactsApp = angular.module('contactsApp', ['ngStorage']);
contactsApp.controller('contactsCtrl', function ($scope, $http, $localStorage) {
	$scope.$storage = $localStorage.$default({
		"contacts": []
	});
	$http.get('contacts.txt').then(function (res) {
		$localStorage.contacts = res.data;
	});
	$scope.contacts = $localStorage.contacts;

	console.log("Локальное хранилище: ", $localStorage.contacts);
	console.log($scope.contacts);

	$scope.delete = function (item) {
		var index = $scope.contacts.indexOf(item);
		$scope.contacts.splice(index, 1);
		angular.element($('.modal-backdrop')).removeClass('in');
		angular.element($('.modal-backdrop')).addClass('out');
		angular.element($('.modal-backdrop')).css('z-index', -1500);
		$localStorage.contacts = $scope.contacts;
		console.log($localStorage.contacts);
	}
	$scope.showAdd = false;

	$scope.toggle = function () {
		$scope.showAdd = !$scope.showAdd;
	};

	$scope.add = function () {
		if (angular.isDefined($scope.name) && $scope.name != '' && $scope.price != '') {
			$scope.contacts.splice(0, 0, {
				name: $scope.name,
				email: $scope.email,
				mobile: $scope.mobile,
				address: $scope.address
			});
			$scope.name = '';
			$scope.email = '';
			$scope.mobile = '';
			$scope.address = '';
			$localStorage.contacts = $scope.contacts;
			console.log($localStorage.contacts);
			console.log($scope.contacts);
		}
	}
	$scope.saveChanges = function () {
		$localStorage.contacts = $scope.contacts;
	}
});