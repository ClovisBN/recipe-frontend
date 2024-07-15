import React from "react";
import { Outlet, Link } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default PublicLayout;
