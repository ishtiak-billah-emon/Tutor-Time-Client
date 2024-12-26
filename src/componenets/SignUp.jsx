import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const { createUser, setUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;

    // firebase

    createUser(email, password)
      .then((result) => {
        // Signed up
        // database connection
        const createdAt = result?.user?.metadata?.creationTime;
        const user = { name, image, email, createdAt };
        setUser(result.user);
        //  Update profile
        updateUserProfile({ displayName: name, photoURL: image });

        fetch("https://tutortime-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log("user created to db: ", data);
            if (data.insertedId) {
              Swal.fire("Successfully signed up!");
              navigate("/");
            }
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log( errorCode, errorMessage);
        // console.log( errorCode, errorMessage);
      });
  };
  return (
    <div className="hero bg-white  mt-12">
      <div className="card bg-base-100 w-full max-w-sm  ">
        <div>
          <h1 className="text-3xl font-bold mb-3 md:mb-6 ">Sign Up</h1>
        </div>
        <form className="" onSubmit={handleSignup}>
          {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          {/* photoURL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Enter your photo url"
              name="image"
              className="input input-bordered"
              required
            />
          </div>
          {/* email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          {/* pass */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter a password"
              name="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn border-2 border-black bg-[#f66962] text-black font-bold">
              Sign Up
            </button>
          </div>
          <p className="text-center mt-3 md:mt-6 text-[#9F9F9F]">
            Already have an account?
            <Link to={"/login"}>
              {" "}
              <span className="underline">Login </span>
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
