(function () {
    'use strict';

    angular.module('simple-chat.app')
        .controller('MainCtrl', function ($rootScope, $location, $state, $log, Auth, loginModel) {
            $rootScope.state = $state;

            $rootScope.isCollapsed = true;
            $rootScope.isLoggedIn = loginModel.isLoggedIn;
            $rootScope.isAdmin = loginModel.isAdmin;

            $rootScope.logout = function () {
                Auth.logout();
                $log.log("MainCtrl - logout: Redirect to login page.");
                $state.go('login');
            };

            $rootScope.isActive = function (route) {
                return route === $location.path();
            };
        });
})();
