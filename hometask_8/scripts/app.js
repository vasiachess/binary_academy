angular.module('app', [])
    .controller('goodsController', function($scope){
        $scope.goods = [{name: 'apple', price: 5}, {name: 'tomato', price: 4}];
   
        $scope.showGoods = true;

        $scope.toggleView = function(){
           $scope.showGoods = !$scope.showGoods;
        };

        $scope.addGoods = function(){
            $scope.goods.push({name: 'new item', price: (Math.random()*10).toFixed(2)});
        };

        $scope.deleteGoods = function(index){
            $scope.goods.splice(index, 1);
        };
    })
    .controller('customersController', function($scope){
        $scope.customers = [{name: 'Sam', city: 'London', age: 25, avatar:'img/photo1.jpg'}, {name: 'John', city: 'Manchester', age: 31, avatar:'img/photo2.jpg'}];

        $scope.showCustomers = true;

        $scope.toggleView2 = function(){
            $scope.showCustomers = !$scope.showCustomers;
        };

        $scope.addCustomer = function(){
            $scope.customers.push({name: 'New Customer', city: 'Unknown', age: Math.round(Math.random()*100), avatar:'img/photo' + Math.round(Math.random()*10).toString()+ '.jpg'});
        };

        $scope.deleteCustomer = function(index){
            $scope.customers.splice(index, 1);
        };
    })
    .filter('filterByName', function(){
       return function(item){
            return "Пользователь: " + item.toUpperCase();
       };
    });