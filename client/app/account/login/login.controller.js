'use strict';

angular.module('simple-chat.app')
    .controller('LoginCtrl', function ($scope, $state, $log, Auth) {
        $scope.login = _login;
        $scope.user = {};
        $scope.errors = {};

        function _login() {
            $scope.submitted = true;

            Auth.login({email: $scope.user.email, password: $scope.user.password})
                .then(function () {
                    $state.go('home');
                }, function (err) {
                    $scope.errors.other = err.message;
                });
        }
    });
