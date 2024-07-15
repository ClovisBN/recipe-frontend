import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
});

// recipes
export const getRecipes = () => api.get("/recipes");
export const getRecipe = (id) => api.get(`/recipes/${id}`);
export const createRecipe = (recipe) => api.post("/recipes", recipe);
export const updateRecipe = (id, recipe) => api.put(`/recipes/${id}`, recipe);
export const deleteRecipe = (id) => api.delete(`/recipes/${id}`);

// ingredients
export const getIngredients = () => api.get("/ingredients");
export const getIngredient = (id) => api.get(`/ingredients/${id}`);
export const createIngredient = (ingredient) =>
  api.post("/ingredients", ingredient);
export const updateIngredient = (id, ingredient) =>
  api.put(`/ingredients/${id}`, ingredient);
export const deleteIngredient = (id) => api.delete(`/ingredients/${id}`);

export default api;
