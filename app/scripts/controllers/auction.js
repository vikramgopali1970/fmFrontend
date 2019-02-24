'use strict';

/**
 * @ngdoc function
 * @name feApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the feApp
 */
angular.module('feApp')
  .controller('auction', function ($scope,Events) {
      console.log("goals");
      Events.getUserData().then(userData=>{
          $scope.username = userData.fname+" "+userData.lname;
          $scope.income = userData.income;
          $scope.expense = userData.expense;
          $scope.savings = userData.savings;
      });


      $scope.goalPlan = {userName:"vikram"};
      $scope.planRetire = {userName:"vikram"};
      $scope.retirementCorpus = {userName:"vikram",goalName:"Retirement",goalFuture:"0"};
        $scope.addGoal = ()=>{
            console.log($scope.goalPlan);
            Events.addGoal($scope.goalPlan).then(resp=>{
                console.log(resp);
            })
        };

        $scope.planRetirement = ()=>{
            console.log($scope.planRetire);
            Events.planRetirement1($scope.planRetire).then(resp=>{
                console.log(resp);
                $scope.retirementCorpus.goalFuture = resp;
            })
        }

      $scope.addRetirementGoal1 = ()=>{
          console.log($scope.retirementCorpus);
          Events.addGoal($scope.retirementCorpus).then(resp=>{
              console.log(resp);
          })
      };
  });
