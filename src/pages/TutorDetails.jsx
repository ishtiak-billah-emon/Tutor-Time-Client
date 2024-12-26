import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2/dist/sweetalert2.js";
import star from "../assets/Images/ratingStar.png";

const TutorDetails = () => {
  const { user } = useContext(AuthContext);
  const tutor = useLoaderData();
  const { _id, photo, language, price, rating, email } = tutor;
  const userEmail = user?.email; // Logged in user
  const handleBookTutor = () => {
    const newBookedTutorial = {
      tutorId: _id,
      tutorEmail: email,
      photo,
      language,
      price,
      userEmail,
    };
    fetch("http://localhost:3000/bookedTutorial", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBookedTutorial),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: `The Tutorial  has been booked successfully.`,
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <section className="max-w-7xl mx-auto mt-8 md:mt-24 p-3 md:p-0 shadow-md">
      <section className="flex flex-col md:flex-row gap-12  p-3 md:p-6">
        {/* Image */}
        <div className="">
          <img className="w-auto md:w-96" src={tutor.photo} alt="" />
        </div>
        {/* Description */}
        <div>
          <div className="space-y-2">
            <div className="flex gap-2 items-center">
              <h1 className="font-bold text-2xl">{tutor.name}</h1>
              <div className="flex gap-1 justify-center items-center">
                <h2 className="font-semibold text-lg"> {tutor.rating} </h2>
                <img className="w-5" src={star} alt="" />
              </div>
            </div>
            <h2 className="font-semibold">Language: {tutor.language}</h2>
            <h2 className="font-semibold">
              Price: <span className="text-[#d29257]">${tutor.price}</span>
            </h2>
            <p className="font-thin">{tutor.description}</p>
            {/* <h5>{tutor.rating}</h5> */}
            <button
              onClick={handleBookTutor}
              className="btn border-2 border-black bg-[#f66962] text-black font-bold w-full"
            >
              Book Now
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default TutorDetails;
