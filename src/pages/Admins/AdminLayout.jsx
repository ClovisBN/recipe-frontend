import React from "react";
import { Outlet, Link } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <nav>
        <Link to="/admin">Admin Dashboard</Link>
        <Link to="/admin/recipes">Recipe List</Link>
        <Link to="/admin/recipes/add">Add Recipe</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
