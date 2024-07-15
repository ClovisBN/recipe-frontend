import React from "react";

const Card = ({ recipe, onEdit, onDelete }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{recipe.name_recipe}</h5>
        <p className="card-text">{recipe.instructions}</p>
        <p>Temps de préparation: {recipe.prep_time} min</p>
        <p>Temps de cuisson: {recipe.cook_time} min</p>
        <p>Portions: {recipe.servings}</p>
        <p>Calories: {recipe.calories}</p>
        <ul>
          {recipe.ingredients.map((ingredient) => (
            <li key={ingredient.id}>
              {ingredient.name_ingredient} - {ingredient.pivot.quantity}
            </li>
          ))}
        </ul>
        <button onClick={() => onEdit(recipe.id)} className="btn btn-primary">
          Editer
        </button>
        <button onClick={() => onDelete(recipe.id)} className="btn btn-danger">
          Supprimer
        </button>
      </div>
    </div>
  );
};

export default Card;
