'use strict';

app.config(function ($stateProvider) {
	$stateProvider.state('signup', {
		url: '/signup',
		template: '<signin-dir action="signup" method="doSignup"></signin-dir>',
		controller: 'AuthCtrl'
	});
});
