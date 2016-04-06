app.controller('LoginCtrl', function($scope, AuthFactory){

  $scope.submitLogin = AuthFactory.doLogin;
});
