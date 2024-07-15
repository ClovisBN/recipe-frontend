import AdminLayout from "../pages/Admins/AdminLayout";
import AdminPage from "../pages/Admins/AdminPage";
import RecipeList from "../components/RecipeList";
import RecipeForm from "../components/RecipeForm";
import ErrorBoundary from "../components/ErrorBoundary";
import RecipeUpdateForm from "../components/RecipeUpdateFrom";
import { adminMiddleware } from "../middleware/adminMiddleware";

const adminRoutes = {
  path: "/admin",
  element: <AdminLayout />,
  loader: adminMiddleware,
  errorElement: <ErrorBoundary />,
  children: [
    { path: "", element: <AdminPage /> },
    { path: "recipes", element: <RecipeList /> },
    { path: "recipes/add", element: <RecipeForm /> },
    { path: "recipes/edit/:id", element: <RecipeUpdateForm /> },
  ],
};

export default adminRoutes;
