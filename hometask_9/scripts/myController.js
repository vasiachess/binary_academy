angular
	.module('app')
	.controller('MyController', MyController)
	.directive('displayImg', displayImg);

function MyController (imageResService, imageService) {
	var vm = this;

	vm.photos = imageService.getPhotos();

}

function displayImg () {
	return {
		replace: true,
		restrict: "A",
		link: function(scope,element,attrs){
			var currentElement = element[0].addEventListener("click", function (e){
				var background = document.createElement('div');
				var fullScreenImg = document.createElement('img');

				document.body.appendChild(background);
                fullScreenImg.src = scope.photo.url;
				fullScreenImg.className = 'fullScreenImage';

				background.className = 'background';
				background.appendChild(fullScreenImg);
				background.addEventListener("click", function (e){
					background.parentNode.removeChild(background);
				});
			});
		},
		template:
		"<div class='title'>{{photo.title}}" +
		"<div><img ng-src='{{photo.thumbnailUrl}}'></div></div>"
	}
}
	