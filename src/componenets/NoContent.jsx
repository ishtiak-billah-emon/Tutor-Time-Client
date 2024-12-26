import React from 'react';
import Lottie from "lottie-react";
import noDataFound from "../assets/Lottie/No data.json";
import { Link } from 'react-router-dom';

const NoContent = () => {
  return (
    <div>
      <Lottie animationData={noDataFound}></Lottie>
      <h1 className="text-base font-thin text-[#716a90] text-center mt-12 ">
        No content found. Please return to
        <Link to="/" className="underline">
          {" "}
          home page
        </Link>
        .{" "}
      </h1>
    </div>
  );
};

export default NoContent;