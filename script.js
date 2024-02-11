var recipe = []; // Holds the list of ingredients for the recipe

// Function to add an ingredient to the recipe
export function addIngredientToRecipe(ingredientName) {
    recipe.push(ingredientName);
    
    // Update the recipe list shown on the panel
    updateRecipePanel();
}

// Function to clear the recipe
export function clearRecipe() {
    recipe = []; // Clear the recipe array
    
    // Update the recipe list shown on the panel
    updateRecipePanel();
}

// Function to finish the recipe - placeholder for whatever functionality this might include
export function finishRecipe() {
    if (recipe.length > 0) {
        // Placeholder for finishing the recipe
        console.log('Recipe: ' + recipe.join(', '));
        // Implement functionality for what happens when the recipe is finished
        // This could be showing a summary, saving the recipe, etc.
    } else {
        console.log('No ingredients in the recipe.');
    }
}

// Function to update the recipe panel with the list of ingredients
function updateRecipePanel() {
    var recipeText = "Your Recipe\n";
    recipe.forEach(function(ingredient) {
        recipeText += "\n" + ingredient;
    });
    
    document.querySelector('#info_text').setAttribute('value', recipeText);
    document.querySelector('#hud_total').setAttribute('value', recipe.length + ' items');
}

// Event listener for the window load event to initialize the application
window.addEventListener('load', function() {
    // This could set up event listeners or any other initialization code for your app
    console.log('Recipe app initialized.');
});