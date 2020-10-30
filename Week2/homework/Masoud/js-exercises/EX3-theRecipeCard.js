'use strict'

let myMealRecipe = {};
myMealRecipe = {
  title : 'pizza',
  servings : 2,
  ingredients : ['cheese 1', 'flour 0.5', 'tomato 3', 'mozerrella 0.2']
}

// code with just for
let propertyCaption = ['Meal name', 'Serves', 'Ingredients'];
let myMealRecipeArray = Object.values(myMealRecipe);
let ingredientFinal = "";

for (let i = 0 ; i < propertyCaption.length ; i++) { 
  console.log(propertyCaption[i] + ": " + myMealRecipeArray[i]); 
}

// code with for in
let property ;
for (property in myMealRecipe){
  console.log(property + ': ' + myMealRecipe[property]);
}


