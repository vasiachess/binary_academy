angular
	.module('app')
	.controller('MyController', MyController)
	.directive('displayFull', displayFull);

function MyController (Photos,photosService) {
	var vm = this;

	//vm.photos = photosService.getPhotos();
	vm.photos = Photos.getPhotos();
}

function displayFull () {
	return {
		replace: true,
		scope: {
			photo: "="
		},
		restrict: "A",
		link: function(scope,element,attrs){
			var currentElement = element[0].addEventListener("click", function (e){
				var back = document.createElement('div');
				var imgFull = document.createElement('img');

				document.body.style.overflow = "hidden"
				document.body.appendChild(back);

				imgFull.src = scope.photo.url;
				imgFull.className = 'fullScreenImage';

				back.className = 'background';
				back.appendChild(imgFull);
				back.addEventListener("click", function (e){
					document.body.style.overflow = "scroll"
					back.parentNode.removeChild(back);
				});
			});
		},
		template:
		"<div><img ng-src='{{photo.thumbnailUrl}}'>" +
		"<div>{{photo.title}}</div></div>"
	}
}
	