import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true,
});

export const getCsrfCookie = () => api.get("/sanctum/csrf-cookie");
export const register = (data) => api.post("/register", data);
export const login = (data) => api.post("/login", data);
export const logout = () => api.post("/logout");
export const getUser = () => api.get("/user");

export const getRecipes = () => api.get("/recipes");
export const getRecipe = (id) => api.get(`/recipes/${id}`);
export const createRecipe = (recipe) => api.post("/recipes", recipe);
export const updateRecipe = (id, recipe) => api.put(`/recipes/${id}`, recipe);
export const deleteRecipe = (id) => api.delete(`/recipes/${id}`);

export const getIngredients = () => api.get("/ingredients");
export const getIngredient = (id) => api.get(`/ingredients/${id}`);
export const createIngredient = (ingredient) =>
  api.post("/ingredients", ingredient);
export const updateIngredient = (id, ingredient) =>
  api.put(`/ingredients/${id}`, ingredient);
export const deleteIngredient = (id) => api.delete(`/ingredients/${id}`);

export default api;
