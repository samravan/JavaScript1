'use strict'

let myMealRecipe = {};
myMealRecipe = {
  title : 'pizza',
  servings : 2,
  ingredients : [['cheese', 1], ['flour', 0.5], ['tomato', 3], ['mozzarella', 0.2], ['basil', 0.1]]
};

let propertyCaption = ['Meal name:', 'Serves:', 'Ingredients:'];
let myMealRecipeArray = Object.values(myMealRecipe);
let ingredientFinal = "";

for (let i = 0 ; i < propertyCaption.length ; i++) { 
  if (i == 2) {
    for ( let j=0 ; j < myMealRecipeArray[2].length ; j++) {
       ingredientFinal = ingredientFinal + myMealRecipeArray[i][j][0] + " " + myMealRecipeArray[i][j][1] + ', ';
    }
    console.log(propertyCaption[i] + " " + ingredientFinal);
  } else {
  console.log(propertyCaption[i] + " " + myMealRecipeArray[i]); 
  }
}



