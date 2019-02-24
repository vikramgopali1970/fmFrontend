'use strict';


class Events{
    constructor($state,$http){
        this.$state = $state;
        this.$http = $http;
    }

    getUserData(){
        return this.$http.post(`http://localhost:8000/getUser`,{"userName":"vikram"}).then(success=>{
            console.log(success.data.data);
            return success.data.data;
        }).catch(error=>{

        });
    }

    getRemainingBudget(){
        return this.$http.post(`http://localhost:8000/remainingBudget`,{"userName":"vikram"}).then(success=>{
            console.log(success.data.data);
            return success.data.data;
        }).catch(error=>{

        });
    }


    budgetChartMaster(){
        return this.$http.post(`http://localhost:8000/getMasterBudgetChart`,{"name":"vikram"}).then(success=>{
            console.log(success.data.data);
            return success.data.data;
        }).catch(error=>{

        });
    }


    addGoal(data){
        return this.$http.post(`http://localhost:8000/addGoal`,data).then(success=>{
            console.log(success.data.data);
            return success.data.data;
        }).catch(error=>{

        });
    }


    planRetirement1(data){
        return this.$http.post(`http://localhost:8000/getRetirementVal`,data).then(success=>{
            console.log(success.data.data);
            return success.data.data;
        }).catch(error=>{

        });
    }

    budgetChartCurrent(){
        return this.$http.post(`http://localhost:8000/getCurrentBudgetChart`,{"name":"vikram"}).then(success=>{
            console.log(success.data.data);
            return success.data.data;
        }).catch(error=>{

        });
    }

    getBusinessDetails(bObj){
        console.log("zip requested is ",bObj);
        return this.$http.post("http://localhost:8000/verifyBusiness",bObj).then(success=>{
            console.log(success);
            return success;
        }).catch(error=>{

        });
    }

}

angular
    .module('feApp')
    .service('Events',
        function($state,$http){
            return new Events($state,$http);
        });
