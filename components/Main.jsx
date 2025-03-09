import React from "react";
import IngredientsList from "./IngredientsList";
import Recipe from "./Recipe";
import QuickIngredients from "./QuickIngredients";

export default function Main() {
    // State to store the ingredients
    const [ingredients, setIngredients] = React.useState([]);

    // State to store the recipe
    const [recipe, setRecipe] = React.useState("");

    // State to store the loading recipe state
    const [loadingRecipe, setLoadingRecipe] = React.useState(false);

    // Function to get the recipe from Chef Mistral
    async function getRecipe() {

        // Set the load recipe state to true
        setLoadingRecipe(true);

        // Get the recipe from Chef Mistral
        //const recipeMarkdown = await getRecipeFromMistral(ingredients);
        const prompt = `You are an assistant that receives a list 
        of ingredients from nature that a user has and suggests a recipe they 
        could make with some or all of those ingredients. 
        You don't need to use every ingredient they mention in 
        your recipe. The recipe can include additional ingredients 
        they didn't mention, but try not to include too many extra 
        ingredients. Format your response in markdown to make it 
        easier to render to a web page. Please give me a recipe you'd 
        recommend I make! The list of ingredients from nature is as follows ${ingredients} . `;
       
        // Get the response from the AI
        const response= await window.puter.ai.chat(prompt);

        // Get the recipe from the response
        const recipeMarkdown = response.message.content;

        // Set the recipe in the state
        setRecipe(recipeMarkdown);

        // Set the load recipe state to false
        setLoadingRecipe(false);
    }

    // Function to add an ingredient to the list
    function addIngredient(formData) {
        // Get the ingredient from the form data        
        const newIngredient = formData.get("ingredient");

        // Check if the input is empty string, null, or undefined
        if (!newIngredient || newIngredient.trim() === "") {
            return;
        }

        // If the ingredient already exists in the list, return
        if(stringExistsInArray(newIngredient, ingredients)) {
            return;
        }

        // If the ingredient is empty, return
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
    }

    // Function to reset the ingredients and recipe
    function reset() {
        // Reset the ingredients
        setIngredients([]);

        // Reset the recipe
        setRecipe("");
    }

    // Function to add a quick ingredient
    function addQuickIngredient(newIngredient) {

        // Check if the input is empty string, null, or undefined
        if (!newIngredient || newIngredient.trim() === "") {
            return;
        }

        // If the ingredient already exists in the list, return
        if(stringExistsInArray(newIngredient, ingredients)) {
            return;
        }

        // Add the quick ingredient to the list
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
    }

    // Function to check if a string exists in an array
    function stringExistsInArray(str, arr) {
        // Convert the string to lowercase
        const lowerCaseStr = str.toLowerCase();
    
        // Check if the string exists in the array (ignoring case)
        return arr.some(item => item.toLowerCase() === lowerCaseStr);
    }

    // Render the main component
    return (
        <main>   
            <section>
                <div className="disclaimer">⚠️ for entertainment purposes only, consume at your own risk</div>
            </section>    
            
            <QuickIngredients onAddQuickIngredient={addQuickIngredient} />

            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>+ Add Ingredient</button>
                <button type="button" onClick={reset}>⟳ Reset</button>
            </form>

            {ingredients.length > 0 &&
                <IngredientsList
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                    loadingRecipe={loadingRecipe}
                />
            }

            {recipe && <Recipe recipe={recipe} />}
        </main>
    );
}