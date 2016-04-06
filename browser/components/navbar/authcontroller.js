app.controller("AuthCtrl", function($scope, AuthFactory){
    angular.extend($scope, AuthFactory);
})