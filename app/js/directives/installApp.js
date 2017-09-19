/* In the new file js/directives/installApp.js, create a new directive named installApp. Refer to the appInfo directive for an example:

use app.directive to create a new directive named installApp
use the restrict option to create a new Element
set the scope option to an empty object {}
use the templateUrl option to tell this directive to use the js/directives/installApp.html file */

app.directive('installApp', function() {
	return {
		restrict: 'E',
		scope: {},
		templateUrl: 'js/directives/installApp.html',

		link: function(scope, element, attrs) {
			scope.buttonText = "Install",
			scope.installed = false,

			scope.download = function(){
				element.toggleClass('btn-active');
				if (scope.installed) {

					scope.buttonText = "Install";
					scope.installed = false;

				} else {

					scope.buttonText = "Uninstall";
					scope.installed = true;

				}
			}  
		}


	};
});