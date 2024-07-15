import React, { useEffect, useState } from "react";
import { getRecipes, deleteRecipe } from "../_help/Api"; // Assurez-vous de définir les fonctions d'API
import Card from "./Card";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await getRecipes();
      setRecipes(response.data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteRecipe(id);
      fetchRecipes();
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  };

  return (
    <div>
      <h1>Liste des Recettes</h1>
      <div className="card-container">
        {recipes.map((recipe) => (
          <Card key={recipe.id} recipe={recipe} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
