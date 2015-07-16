angular
    .module('app')
    .factory('photosService', photosService)

function photosService($http) {
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
