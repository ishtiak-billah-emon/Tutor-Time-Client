import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from "sweetalert2/dist/sweetalert2.js";


const AddTutorials = () => {

  const {user} = useContext(AuthContext);
  const name = user?.displayName;
  const email = user?.email;
  // console.log(name, email);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const language = form.language.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    
    const newTutorial = { name, email, photo, language, price, description, rating};
  

    // add to the database
    fetch("http://localhost:3000/tutorials", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTutorial),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if(data.insertedId){
          Swal.fire({
            title: "Success!",
            text: `The Tutorial  has been added successfully to the website.`,
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  
  }
  return (
    <div className="max-w-7xl mx-auto">
      Add Tutorial
      <div className="flex gap-4 mb-3">
        <input
          type="text"
          defaultValue={name}
          name="username"
          className="input input-bordered w-full max-w-xs"
          readOnly
        />
        <input
          type="text"
          defaultValue={email}
          name="useremail"
          className="input input-bordered w-full max-w-xs"
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
            className="input input-bordered w-full max-w-xs"
          />
          {/* Language */}
          <input
            type="text"
            placeholder="Enter the language"
            name="language"
            className="input input-bordered w-full max-w-xs"
          />
          {/* Price */}
          <input
            type="text"
            placeholder="Enter the Price"
            name="price"
            className="input input-bordered w-full max-w-xs"
          />
          {/* description */}
          <input
            type="text"
            placeholder="Type Description"
            name="description"
            className="input input-bordered w-full max-w-xs"
          />
          {/* rating */}
          <input
            type="text"
            placeholder="Rating"
            defaultValue={"0"}
            name="rating"
            className="input input-bordered w-full max-w-xs"
          />

          <input
            type="submit"
            value="SUBMIT"
            className="btn btn-primary w-2/3"
          />
        </form>
      </div>
    </div>
  );
};

export default AddTutorials;