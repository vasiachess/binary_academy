angular.module('app', [])
    .controller('goodsController', function($scope){
        $scope.goods = [{name: 'apple', price: 5}, {name: 'tomato', price: 4}];
   
        $scope.showGoods = true;

        $scope.toggleView = function(){
           $scope.showGoods = !$scope.showGoods;
        };
    })
    .controller('customersController', function($scope){
        $scope.customers = [{name: 'Sam', city: 'London', age: 25, avatar:''}, {name: 'John', city: 'Manchester', age: 31, avatar:''}];

        $scope.showCustomers = true;

        $scope.toggleView2 = function(){
            $scope.showCustomers = !$scope.showCustomers;
        };
    })