import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createRecipe, getIngredients } from "../_help/Api"; // Assurez-vous de définir les fonctions d'API

const RecipeForm = () => {
  const [name, setName] = useState("");
  const [instructions, setInstructions] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [servings, setServings] = useState("");
  const [calories, setCalories] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([
    { id: "", quantity: "" },
  ]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchIngredients();
  }, []);

  const fetchIngredients = async () => {
    try {
      const response = await getIngredients();
      setIngredients(response.data);
    } catch (error) {
      console.error("Error fetching ingredients:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newRecipe = {
        name_recipe: name,
        instructions,
        prep_time: prepTime,
        cook_time: cookTime,
        servings,
        calories,
        ingredients: selectedIngredients,
      };
      await createRecipe(newRecipe);
      navigate("/admin/recipes");
    } catch (error) {
      console.error("Error adding recipe:", error);
    }
  };

  const handleIngredientChange = (index, field, value) => {
    const updatedIngredients = selectedIngredients.map((ingredient, i) =>
      i === index ? { ...ingredient, [field]: value } : ingredient
    );
    setSelectedIngredients(updatedIngredients);
  };

  const addIngredientField = () => {
    setSelectedIngredients([...selectedIngredients, { id: "", quantity: "" }]);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Nom de la recette:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Instructions:</label>
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Temps de préparation (min):</label>
        <input
          type="number"
          value={prepTime}
          onChange={(e) => setPrepTime(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Temps de cuisson (min):</label>
        <input
          type="number"
          value={cookTime}
          onChange={(e) => setCookTime(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Portions:</label>
        <input
          type="number"
          value={servings}
          onChange={(e) => setServings(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Calories:</label>
        <input
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Ingrédients:</label>
        {selectedIngredients.map((ingredient, index) => (
          <div key={index} className="form-group">
            <select
              value={ingredient.id}
              onChange={(e) =>
                handleIngredientChange(index, "id", e.target.value)
              }
              required
            >
              <option value="">Sélectionner un ingrédient</option>
              {ingredients.map((ingredient) => (
                <option key={ingredient.id} value={ingredient.id}>
                  {ingredient.name_ingredient}
                </option>
              ))}
            </select>
            <input
              type="number"
              value={ingredient.quantity}
              onChange={(e) =>
                handleIngredientChange(index, "quantity", e.target.value)
              }
              placeholder="Quantité"
              required
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addIngredientField}
          className="btn btn-secondary"
        >
          Ajouter un ingrédient
        </button>
      </div>
      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          Ajouter la recette
        </button>
      </div>
    </form>
  );
};

export default RecipeForm;
