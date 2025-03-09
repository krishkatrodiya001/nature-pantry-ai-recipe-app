import React from 'react';

// IngredientsList component
export default function IngredientsList(props) {
    // Map the ingredients to list items
    const ingredientsListItems = props.ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ));

    // Render the ingredients list
    return (
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
            {props.ingredients.length > 0 && <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                {!props.loadingRecipe && <button onClick={props.getRecipe}>Get a recipe</button>}
                {props.loadingRecipe && <button disabled>Retrieving Recipe...</button>}
            </div>}
        </section>
    );
}