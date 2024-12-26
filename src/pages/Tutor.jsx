import React from "react";
import { Link, useNavigate } from "react-router-dom";
import star from "../assets/Images/ratingStar.png";

const Tutor = ({ tutor }) => {
  // console.log("Tutor:", tutor);
  const { _id, name, photo, email, language, description, rating } = tutor;

  const navigate = useNavigate();
  return (
    <div className="bg-white border-2 border-black flex gap-3 md:gap-12 rounded-xl mb-3 p-6 ">
      {/* photo */}
      <div className="rounded-xl flex-1">
        <img className="w-auto h-auto md:h-60" src={photo} alt="Tutor Image" />
      </div>

      {/* DESCRIPTION */}
      <div className="flex-[2] space-y-3">
        <div className="flex gap-2">
          <h1 className="font-bold">{name}</h1>
          <div className="flex gap-1 justify-center items-center">
            <h2 className="font-semibold"> {rating} </h2>
            <img className="w-5" src={star} alt="" />
          </div>
        </div>
        <h2 className="font-thin">Language: {language}</h2>
        <p className="font-thin">{description}</p>
        <Link to={`/tutor/${_id}`} className="btn border-black md:px-6 bg-[#f66962] text-white">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Tutor;
