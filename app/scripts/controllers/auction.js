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
                Events.getGoals().then(data=>{
                    console.log();
                    $scope.goalList = data.goals;
                })
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


        Events.getGoals().then(data=>{
            console.log();
            $scope.goalList = data.goals;
            $scope.chartFinal();
        })


      $scope.chartFinal=()=>{
          Events.finalChart().then(data=>{
              console.log(data);
              Highcharts.chart('lastchart', {
                  title: {
                      text: 'Goal Savings vs Current Savings'
                  },
                  chart: {
                      type: 'column',

                  },

                  credits: {
                      enabled: false
                  },

                  plotOptions: {
                      series: {
                          fillColor: {
                              linearGradient: [0, 0, 0, 300],
                              stops: [
                                  [0, Highcharts.getOptions().colors[0]],
                                  [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                              ]
                          }
                      },
                      animation: {
                          duration: 2000
                      }
                  },
                  yAxis: {
                      alignTicks : true,
                      labels: {
                          enabled: true
                      }

                  },

                  xAxis:{
                      categories: ["Savings","Goal Savings"],
                      labels: {
                          enabled: true
                      }
                  },

                  legend: {
                      layout: 'vertical',
                      align: 'right',
                      verticalAlign: 'middle'
                  },



                  series: [{
                      name: 'Amount',
                      fillColor : {
                          linearGradient : [0, 0, 0, 300],
                          stops : [
                              [0, Highcharts.getOptions().colors[0]],
                              [1, 'rgba(2,0,0,0)']
                          ]
                      },
                      data:  [data.savings,data.reqSav]
                  }]
              });
          })
      }
  });
