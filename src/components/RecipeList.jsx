import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRecipes, deleteRecipe } from "../_help/Api";
import Card from "./Card"; // Assurez-vous de définir ce composant

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

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

  const handleEdit = (id) => {
    navigate(`/admin/recipes/edit/${id}`);
  };

  return (
    <div>
      <h1>Liste des Recettes</h1>
      <div className="card-container">
        {recipes.map((recipe) => (
          <Card
            key={recipe.id}
            recipe={recipe}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
