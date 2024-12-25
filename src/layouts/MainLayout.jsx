import React from "react";
import Navbar from "../componenets/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* Footer */}
    </div>
  );
};

export default MainLayout;
