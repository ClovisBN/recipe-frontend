import axios from "axios";

// Configuration de base pour Axios
const api = axios.create({
  baseURL: "http://localhost:8000/api", // Assurez-vous que c'est bien l'URL de votre serveur backend
});

// Intercepteur de requêtes pour ajouter le token JWT aux en-têtes
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Fonctions d'API pour les recettes
export const getRecipes = () => api.get("/recipes");
export const getRecipe = (id) => api.get(`/recipes/${id}`);
export const createRecipe = (recipe) => api.post("/recipes", recipe);
export const updateRecipe = (id, recipe) => api.put(`/recipes/${id}`, recipe);
export const deleteRecipe = (id) => api.delete(`/recipes/${id}`);

// Fonctions d'API pour les ingrédients
export const getIngredients = () => api.get("/ingredients");
export const getIngredient = (id) => api.get(`/ingredients/${id}`);
export const createIngredient = (ingredient) =>
  api.post("/ingredients", ingredient);
export const updateIngredient = (id, ingredient) =>
  api.put(`/ingredients/${id}`, ingredient);
export const deleteIngredient = (id) => api.delete(`/ingredients/${id}`);

export default api;
