import React from 'react';
import RecipeForm from './RecipeForm Component';
import RList from './RList';

function App() {
  const [recipes, setRecipes] = React.useState([
    { id: 1, name: 'Recipe 1', ingredients: 'Ingredients 1' },
    { id: 2, name: 'Recipe 2', ingredients: 'Ingredients 2' }
  ]);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, { id: recipes.length + 1, ...recipe }]);
  };

  return (
    <div className="App">
      <h1>Recipe App</h1>
      <RecipeForm addRecipe={addRecipe} />
      <RList recipes={recipes} />
    </div>
  );
}

export default App;