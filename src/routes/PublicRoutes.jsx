// src/routes/publicRoutes.js
import PublicLayout from "../pages/Publics/PublicLayout";
import HomePage from "../pages/Publics/HomePage";
import LoginPage from "../pages/Publics/LoginPage";
import ErrorBoundary from "../components/ErrorBoundary";
import RegisterPage from "../pages/Publics/RegisterPage";

const publicRoutes = {
  path: "/",
  element: <PublicLayout />,
  errorElement: <ErrorBoundary />,
  children: [
    { path: "", element: <HomePage /> },
    { path: "login", element: <LoginPage /> },
    { path: "register", element: <RegisterPage /> },
  ],
};

export default publicRoutes;
