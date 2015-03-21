var myApp = angular.module('myApp', ['moduleTrianglifyAnimate']);

myApp.directive('centerize', function ($window) {
	return function (scope, element) {
		var w = angular.element($window);
		scope.getElementDimensions = function () {
			return { 'h': element.height(), 'w': element.width() };
		};
		scope.$watch(scope.getElementDimensions, function (newValue, oldValue) {
			scope.elementHeight = newValue.h;
            scope.elementWidth = newValue.w;

            scope.style = function () {
				return { 
					'left': '50%', 
					'top': '50%',
					'margin-top': (scope.elementHeight / -2) + 'px', 
					'margin-left': (scope.elementWidth / -2) + 'px'
                };
			};
            
		}, true);
	
		w.bind('resize', function () {
			scope.$apply();
            // var w = angular.element(this);
            if(w) {
                $("#tranglify-bg").attr('width', w.width());
                $("#tranglify-bg").attr('height', Math.max(w.height(), $("#tranglify-bg").attr('height')));
            }
		});
	}
});

myApp.controller('PageController', ['$scope', function($scope) {

	$scope.currentYear = new Date().getFullYear();

}]);