// src/routes/userRoutes.js
import UserLayout from "../pages/Users/UserLayout";
import UserPage from "../pages/Users/UserPage";
import ErrorBoundary from "../components/ErrorBoundary";
// import { userMiddleware } from "../middleware/userMiddleware";

const userRoutes = {
  path: "/user",
  element: <UserLayout />,
  errorElement: <ErrorBoundary />,
  children: [
    {
      path: "",
      element: <UserPage />,
    },
  ],
};

export default userRoutes;
