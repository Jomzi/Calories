 angular.module('starter.services', [])
 
 .factory("CalorieFactory", function(){
    //Object Array to hold foods
    var foodEatenDatabase = {
        foodsEaten: [{
            foodName: "999",
            foodCalories: 999,
            date: new Date(),
            isChecked: false
        }]
    }
    
    //Empty variables to calculate total calories
    var totalCalories = 0;
    var totalCaloriesToday = 0;
    
    //Function to calculate total calories
    function calculateCalories(){
      totalCalories = 0; 
        
        for(var i = 0; i < foodEatenDatabase.foodsEaten.length; i++){
            totalCalories += foodEatenDatabase.foodsEaten[i].foodCalories;
        }
        
        return totalCalories;
    }
            
    //Function to calculate the calories used in one day
    function calculateCaloriesToday(){
        totalCaloriesToday = 0;
        for(var i = 0; i < foodEatenDatabase.foodsEaten.length; i++){
            if(foodEatenDatabase.foodsEaten[i].date.getDate() === new Date().getDate()){
            totalCaloriesToday += foodEatenDatabase.foodsEaten[i].foodCalories;
            }
        }
            
        return totalCaloriesToday;    
    }
    
    //Returns the array and functions to the controllers
    return {
        foodEatenDatabase: foodEatenDatabase,
        calculateCalories: calculateCalories,
        calculateCaloriesToday: calculateCaloriesToday
    }
     
 });
        
          
