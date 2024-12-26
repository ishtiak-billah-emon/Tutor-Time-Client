import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import NoContent from "../componenets/NoContent";
import star from "../assets/Images/ratingStar.png";

const MyBookedTutor = () => {
  const { user } = useContext(AuthContext);
  const email = user.email;
  const [tutors, setTutors] = useState([]);
  useEffect(() => {
    // fetch(`http://localhost:3000/bookedTutorial?email=${email}`)
    fetch(`http://localhost:3000/bookedTutorial/${email}`)
      .then((res) => res.json())
      .then((data) => setTutors(data));
  }, [email]);

  // handle review
  const handleReview = (tutorId) => {
    fetch(`http://localhost:3000/tutorials/review/${tutorId}`, {
      method: "PATCH",
      headers:{
        
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Review count updated successfully!");
          // Optionally refresh the tutors list
          setTutors((prevTutors) =>
            prevTutors.map((tutor) =>
              tutor._id === tutorId
                ? { ...tutor, review: tutor.review + 1 }
                : tutor
            )
          );
        }
      })
      .catch((error) => console.error("Error updating review:", error));
  };

  if (tutors.length === 0) {
    return (
      <>
        <div className="flex justify-center mt-12">
          <NoContent />
        </div>
      </>
    );
  }
  return (
    <div className="p-4 md:p-0">
      {tutors.map((tutor, index) => (
        <section
          key={index}
          className="max-w-7xl mx-auto mt-12 md:mt-24 md:p-6 border-2 border-black rounded-lg  shadow-md"
        >
          <section className="flex flex-col md:flex-row gap-12  p-3 md:p-6">
            {/* Image */}
            <div className="">
              <img
                className="w-auto md:w-96"
                src={tutor.photo}
                alt="Tutor Image"
              />
            </div>
            {/* Description */}
            <div className="space-y-3">
              <div className="space-y-2">
                <div className="flex gap-2 items-center">
                  <h1 className="font-bold text-2xl">{tutor.name}</h1>
                  <div className="flex gap-1 justify-center items-center">
                    <h2 className="font-semibold text-lg"> {tutor.rating} </h2>
                    <img className="w-5" src={star} alt="" />
                    <p>({tutor.review} Reviews)</p>
                  </div>
                </div>
                <h2 className="font-semibold">Language: {tutor.language}</h2>
                <h2 className="font-semibold">
                  Price: <span className="text-[#d29257]">${tutor.price}</span>
                </h2>
                <p className="font-thin">{tutor.description}</p>
              </div>
              <button
                onClick={() => handleReview(tutor._id)}
                className="btn w-full bg-[#a8e9b2] font-bold text-lg"
              >
                Review
              </button>
            </div>
          </section>
        </section>
      ))}
    </div>
  );
};

export default MyBookedTutor;
