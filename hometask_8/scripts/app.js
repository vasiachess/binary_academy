angular.module('app', [])
    .controller('firstController', function($scope){
        $scope.goods = [{name: 'apple', price: 5}, {name: 'tomato', price: 4}];
   
        $scope.showGoods = true;

        $scope.toggleView = function(){
           $scope.showGoods = !$scope.showGoods; 
        };
    })