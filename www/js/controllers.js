angular.module('starter.controllers', [])

.controller('FoodCtrl', function($scope, CalorieFactory) {
    //Object to enter food details for the add function
    var enterFoodDetails = {
        foodName: null,
        calorieAmount: null
    }
    
    //Load database into controller
    var foodEatenDatabase = CalorieFactory.foodEatenDatabase;
    
    //Deletes the sample object (prevent from displaying)
    if(foodEatenDatabase.foodsEaten.length > 0){
        if(foodEatenDatabase.foodsEaten[0].foodName === "999"){
            foodEatenDatabase.foodsEaten.splice(foodEatenDatabase.foodsEaten.indexOf(1), 1);  
        }
    }
    
    //Function to add a food to the object array
    function addFood(name, calories){
        foodEatenDatabase.foodsEaten.push({foodName: name, foodCalories: calories, date: new Date(), isChecked: false})
        //console.log(foodEatenDatabase.foodsEaten);
        $scope.enterFoodDetails.foodName = null;
        $scope.enterFoodDetails.calorieAmount = null;
    }
    
    //Function to delete a food from the object array
    function deleteFood(food){
       //console.log("Delete Hit");
       foodEatenDatabase.foodsEaten.splice(foodEatenDatabase.foodsEaten.indexOf(food), 1);
    }
    
    //Convert above variables and functions to be used in HTML files
    $scope.enterFoodDetails = enterFoodDetails;
    $scope.foodEatenDatabase = foodEatenDatabase;
    $scope.addFood = addFood;
    $scope.deleteFood = deleteFood;
})

.controller('CalorieCtrl', function($scope, CalorieFactory) {
    
    //Function to use factory functions to calculate total calories
     function calculateCalories() {
        $scope.totalCalories = CalorieFactory.calculateCalories();
        $scope.totalCaloriesToday = CalorieFactory.calculateCaloriesToday();
    }
    
    //$scope variables to be used in HTML files
    $scope.totalCalories = 0;
    $scope.totalCaloriesToday = 0;
    $scope.calculateCalories = calculateCalories;
})

.controller('menuCtrl', function($scope, CalorieFactory) {
    
    //Function to save to the localStorage
    function saveData(){
        window.localStorage.setItem("Database", CalorieFactory.foodEatenDatabase0);
    }
    
    //Function to load from the localStorage
    function getData(){
        CalorieFactory.foodEatenDatabase = window.localStorage.getItem("Data");
    }
    
    //Functions converted to $scope for the HTML Files
    $scope.saveData = saveData;
    $scope.getData = getData;
})
;
