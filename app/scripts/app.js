'use strict';

/**
 * @ngdoc overview
 * @name feApp
 * @description
 * # feApp
 *
 * Main module of the application.
 */
angular
  .module('feApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider) {

      let dashboard =  {
          name : 'dashboard',
          url : '/dashboard',
          templateUrl: 'views/dashboard.html',
          controller: 'AboutCtrl',
          controllerAs: 'main'
      };

      let goals =  {
          name : 'goals',
          url : '/goals',
          templateUrl: 'views/goals.html',
          controller: 'auction',
          controllerAs: 'main'
      };

    $stateProvider.state(dashboard);
    $stateProvider.state(goals);
    $stateProvider.state("otherwise", { url : '/dashboard'})

  });
