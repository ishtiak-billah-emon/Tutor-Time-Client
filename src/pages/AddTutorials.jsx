import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2/dist/sweetalert2.js";

const AddTutorials = () => {
  const { user } = useContext(AuthContext);
  const name = user?.displayName;
  const email = user?.email;
  // console.log(name, email);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const language = form.language.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const review = form.review.value;

    const newTutorial = {
      name,
      email,
      photo,
      language,
      price,
      description,
      rating,
      review,
    };

    // add to the database
    fetch("https://tutortime-server.vercel.app/tutorials", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTutorial),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: `The Tutorial  has been added successfully to the website.`,
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="max-w-7xl mx-auto p-8 md:mt-24 md:py-12  md:rounded-lg md:shadow-md">
      <h1 className="font-bold text-2xl text-center mb-6 bg-[#e5fae9] h-auto py-3 md:py-6 rounded-lg">
        Add a new Tutorial!
      </h1>
      <div className="flex flex-col md:flex-row gap-4 mb-3">
        <input
          type="text"
          defaultValue={name}
          name="username"
          className="input input-bordered w-full bg-slate-100 "
          readOnly
        />
        <input
          type="text"
          defaultValue={email}
          name="useremail"
          className="input input-bordered w-full bg-slate-100  "
          readOnly
        />
      </div>
      <div>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {/* Image */}
          <input
            type="text"
            placeholder="Enter the photo url"
            name="photo"
            className="input input-bordered w-full "
          />
          {/* Language */}
          <input
            type="text"
            placeholder="Enter the language"
            name="language"
            className="input input-bordered w-full"
          />
          {/* Price */}
          <input
            type="text"
            placeholder="Enter the Price"
            name="price"
            className="input input-bordered w-full"
          />
          {/* description */}
          <input
            type="text"
            placeholder="Type Description"
            name="description"
            className="input input-bordered w-full"
          />
          {/* rating */}
          <input
            type="text"
            placeholder="Rating"
            name="rating"
            className="input input-bordered w-full"
          />
          {/* review */}
          <input
            type="text"
            placeholder="Review"
            defaultValue={"0"}
            name="review"
            className="input input-bordered w-full bg-slate-100 "
            readOnly
          />

          <input
            type="submit"
            value="SUBMIT"
            className="btn  bg-[#f66962] text-black font-bold "
          />
        </form>
      </div>
    </div>
  );
};

export default AddTutorials;
