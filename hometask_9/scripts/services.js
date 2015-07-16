angular.module('app')
        .factory('imageService', imageService)
        .factory('imageResService', imageResService)

function imageService($http) {
    var photos = {}

    photos.getPhotos = function () {
        var thumbs = []
        $http.get('http://jsonplaceholder.typicode.com/photos').success( function (result){
            for (prop in result){
                thumbs.push(result[prop]);
                if (result[prop].id == 7) break;
            }
        });
        return thumbs;
    }
    return photos;
}

function imageResService ($resource) {

    return {
        getPhotos: function() {
            var photos = [];

            $resource('http://jsonplaceholder.typicode.com/photos').query(function (result) {
                for (prop in result){
                    photos.push(result[prop]);
                    if (result[prop].id == 7) break;
                }
            });
            return photos;
        }
    }
}