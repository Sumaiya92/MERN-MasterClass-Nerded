import React, { useState } from 'react';
import RecipeForm from './RecipeForm Component';
import RecipeList from './RList';

function App() {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  return (
    <div>
      <h1>Recipe App</h1>
      <RecipeForm addRecipe={addRecipe} />
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;