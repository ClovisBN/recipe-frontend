// src/components/UserLayout.js
import React from "react";
import { Outlet, Link } from "react-router-dom";

const UserLayout = () => {
  return (
    <div>
      <nav>
        <Link to="/user">User Dashboard</Link>
        <Link to="/user/profile">Profile</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default UserLayout;
