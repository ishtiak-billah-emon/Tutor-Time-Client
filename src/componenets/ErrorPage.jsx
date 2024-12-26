import Lottie from "lottie-react";
import React from "react";
import errorIcon from "../assets/Lottie/404.json";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div>
      <Lottie className="h-96 w-full mt-12" animationData={errorIcon}></Lottie>
      <h1 className="text-base font-thin text-[#716a90] text-center mt-12 ">
        No page found. Please return to
        <Link to="/" className="underline text-[#f66962]">
          {" "}
          home page
        </Link>
        .{" "}
      </h1>
    </div>
  );
};

export default ErrorPage;
