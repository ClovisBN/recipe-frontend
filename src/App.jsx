import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import adminRoutes from "./routes/AdminRoutes";
import publicRoutes from "./routes/PublicRoutes";

const router = createBrowserRouter([publicRoutes, adminRoutes]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
