import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateTutorial = () => {
  const { user } = useContext(AuthContext);
  // console.log("user", user);
  const { id } = useParams();
  const [tutorial, setTutorial] = useState(null);

  useEffect(() => {
    fetch(`https://tutortime-server.vercel.app/tutorials/${id}`)
      .then((res) => res.json())
      .then((data) => setTutorial(data));
  }, [id]);

  if (!tutorial) {
    return <div>Loading...</div>; // Show a loading state while data is being fetched
  }

  const { _id, name, email, photo, language, price, description, rating } =
    tutorial;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const language = form.language.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const updatedTutorial = {
      _id,
      name,
      email,
      photo,
      language,
      price,
      description,
      rating,
    };

    fetch(`https://tutortime-server.vercel.app/updateTutorial/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedTutorial),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount) {
          // console.log("successfully updated");
          Swal.fire({
            title: "Success!",
            text: "Tutorial updated successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          e.target.reset();
        }
      });
  };

  return (
    <div className="max-w-7xl mx-auto p-6 mt-6 md:shadow-md md:rounded-lg">
      <h1 className="bg-[#e5fae9] p-3 rounded-md font-bold text-center mb-3 md:text-2xl">
        Update your Tutorial
      </h1>
      <form
        onSubmit={handleUpdate}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
      >
        {/* Name */}
        <input
          type="text"
          defaultValue={name}
          name="name"
          className="input input-bordered w-full bg-slate-100 border-2 "
          readOnly
        />
        {/* Email */}
        <input
          type="email"
          defaultValue={email}
          name="email"
          className="input input-bordered w-full bg-slate-100 border-2"
          readOnly
        />
        {/* Image */}
        <input
          type="text"
          placeholder="Enter the photo url"
          defaultValue={photo}
          name="photo"
          className="input input-bordered w-full "
        />
        {/* Language */}
        <input
          type="text"
          placeholder="Enter the language"
          defaultValue={language}
          name="language"
          className="input input-bordered w-full "
        />
        {/* Price */}
        <input
          type="text"
          placeholder="Enter the Price"
          defaultValue={price}
          name="price"
          className="input input-bordered w-full "
        />
        {/* Description */}
        <input
          type="text"
          placeholder="Type Description"
          defaultValue={description}
          name="description"
          className="input input-bordered w-full "
        />
        {/* Rating */}
        <input
          type="text"
          placeholder="Rating"
          defaultValue={rating || "0"}
          name="rating"
          className="input input-bordered w-full "
          readOnly
        />

        <input
          type="submit"
          value="UPDATE"
          className="btn bg-[#59caf3] font-bold md:border-2 md:border-black "
        />
      </form>
    </div>
  );
};

export default UpdateTutorial;
