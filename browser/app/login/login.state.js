'use strict';

app.config(function ($stateProvider) {
	$stateProvider.state('login', {
		url: '/login',
		template: '<signin-dir action="login" method="doLogin"></signin-dir>',
		controller: 'AuthCtrl'
	});
});
