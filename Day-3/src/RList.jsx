import React from 'react';
import Recipe from './Recipe Component';

const RList = ({ recipes }) => {
  return (
    <div>
      {recipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id} />
      ))}
    </div>
  );
};

export default RList;