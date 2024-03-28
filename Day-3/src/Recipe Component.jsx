import React from 'react';

const Recipe = ({ recipe }) => {
  return (
    <div>
      <h3>{recipe.name}</h3>
      <p>Ingredients: {recipe.ingredients}</p>
      <p>Instructions: {recipe.instructions}</p>
    </div>
  );
};

export default Recipe;