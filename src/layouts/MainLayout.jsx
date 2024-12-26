import React from "react";
import Navbar from "../componenets/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../componenets/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet/>     
      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default MainLayout;
