angular.module('app')
        .factory('imageService', imageService)
        .factory('imageRes', imageRes)

function imageService($http) {
    var photos = {}

    photos.getPhotos = function () {
        var phs = []
        $http.get('http://jsonplaceholder.typicode.com/photos').success( function (res){
            for (prop in res){
                phs.push(res[prop]);
                if (res[prop].id == 7) break;
            }
        });
        return phs;
    }
    return photos;
}

function imageRes ($resource) {

    return {
        getPhotos: function() {
            var photos = [];

            $resource('http://jsonplaceholder.typicode.com/photos').query(function (res) {
                for (prop in res){
                    photos.push(res[prop]);
                    if (res[prop].id == 7) break;
                }
            });
            return photos;
        }
    }
}