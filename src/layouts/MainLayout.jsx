import React from "react";
import Navbar from "../componenets/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto"><Outlet /></div>
      
      {/* Footer */}
    </div>
  );
};

export default MainLayout;
