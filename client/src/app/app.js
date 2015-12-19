var app = angular.module('app', [
    'ngRoute',
    'app.auth',
    'app.dashboard',
    'app.services',
    'app.editor',
    'app.forgotPassword',
    'app.resetPassword',
    'app.verifyemail',
    'app.signup2',
    'app.invite'
    ]);


app.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/home/home.html',
    })
    .when('/login', {
    	templateUrl: 'app/auth/login.html',
    	controller: 'AuthController',
    })
    .when('/signup', {
        templateUrl: 'app/auth/signup.html',
        controller: 'AuthController'
    })
    .when('/signup2', {
        templateUrl: 'app/auth/signup2.html',
        controller: 'signup2Controller'
    })
    .when('/verifyemail', {
        templateUrl: 'app/auth/verifyemail.html',
        controller: 'verifyEmailController'
    })
    .when('/forgotpassword', {
        templateUrl: 'app/settings/forgotpassword.html',
        controller: 'forgotPasswordController'
    })
    .when('/resetpassword', {
        templateUrl: 'app/settings/resetpassword.html',
        controller: 'resetPasswordController'
    })
    .when('/dashboard', {
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardController'
    })
    .when('/editor', {
        templateUrl: 'app/editor/editor.html',
        controller: 'EditorController'
    })
    .when('/about', {
        templateUrl: 'app/about/about.html',
    })
    .when('/usersetting', {
        templateUrl: 'app/settings/usersetting.html'
    })
    .when('/invitation', {
        templateUrl: 'app/auth/invitation.html'
    })
});



app.run(function ($rootScope, $location, Auth) {
//   // here inside the run phase of angular, our services and controllers
//   // have just been registered and our app is ready
//   // however, we want to make sure the user is authorized
//   // we listen for when angular is trying to change routes
//   // when it does change routes, we then look for the token in localstorage
//   // and send that token to the server to see if it is a real user or hasn't expired
//   // if it's not valid, we then redirect back to signin/signup
  $rootScope.$on('$routeChangeStart', function (evt, next, current) {
    var isPublicRoute = ['/dashboard', '/editor'].indexOf(next.$$route.originalPath) === -1;
    if (next.$$route && !isPublicRoute && !Auth.isAuth()) {
      $location.path('/login');
    }
  });
})

// app.run(function ($http, $scope, $rootScope, $location) {
//     $http({
//     method: 'POST',
//     url: '/refreshtoken',
//     headers: {
//       'Authorization': token,
//       'Content-Type': 'application/json'
//     },
//     data: {}
//     })
//    .success(function(data){
    
//    })
//    .catch(function(err){
//     console.log(err);
//    })



// })
