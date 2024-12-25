import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Tutor = ({ tutor }) => {
  // console.log("Tutor:", tutor);
  const {_id, name, image, email, language, description, rating } = tutor;
  const navigate = useNavigate();
  return (
    <div className="bg-slate-200 flex gap-3 rounded-xl mb-3">
      <div className="p-2 border border-black rounded-xl">
        <img className="w-48 " src={image} alt="Tutor Image"/>
      </div>
      <div>
        <div className="flex gap-2">
          <h1>{name}</h1>
          <h2>Rating: {rating}</h2>
        </div>
        <h2>Language: {language}</h2>
        <p>{description}</p>
        <Link to={`/tutor/${_id}`}  className="btn btn-primary">View Details</Link>
      </div>
    </div>
  );
  };

export default Tutor;
