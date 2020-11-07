"use strict"
let recipe = {
    mealName : "Mirzaghasemi",
    serves: 2,
    ingredients : ["2 eggplants", "2 eggs", "1 garlic"]
};
let x = ['Meal name', 'Serves', 'Ingredients']
//Method1:
// for (let property in recipe) {
//     console.log(property + ": " + recipe[property]);
// };

//Method2:
// for (let property in recipe) {
//     console.log(`${property}: ${recipe[property]}`);
// };

//Method3:
let property = Object.keys(recipe);
let value = Object.values(recipe);

for (let i = 0; i < Object.keys(recipe).length; i++) {
    
    console.log(x[i] + ": " + value[i]);
    
};

