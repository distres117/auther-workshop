app.directive("signinDir", function(){
    return {
        templateUrl: '/browser/components/signin/login.html',
        scope: {
            action: '@',
            method: '='
        },
        controller: 'AuthCtrl'
    }
    
})