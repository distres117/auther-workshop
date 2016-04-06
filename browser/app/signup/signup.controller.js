app.controller('SignupCtrl', function($scope, AuthFactory){
  $scope.doSubmit = AuthFactory.doSignup;
});
