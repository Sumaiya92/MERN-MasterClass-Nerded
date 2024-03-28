import React, { useState } from 'react';

const RecipeForm = ({ addRecipe }) => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe({ name, ingredients, instructions });
    setName('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <textarea
        placeholder="Ingredients"
        value={ingredients}
        onChange={(event) => setIngredients(event.target.value)}
      />
      <textarea
        placeholder="Instructions"
        value={instructions}
        onChange={(event) => setInstructions(event.target.value)}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;