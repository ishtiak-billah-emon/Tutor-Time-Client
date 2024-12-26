import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import googleLogo from "../assets/Images/google.png";

const Login = () => {
  const { signInUser, setUser, loginWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // firebase
    signInUser(email, password)
      .then((res) => {
        setUser(res.user);
        const lastSignInTime = res.user?.metadata?.lastSignInTime;
        const loginInfo = {
          email,
          lastSignInTime,
        };
        fetch("http://localhost:3000/users", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loginInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              Swal.fire("Successfully Logged in!");
              navigate(location?.state ? location.state : "/");
            }
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire("Login failed. Please try again.");
      });
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      Swal.fire("Successfully Logged in!");
      navigate(location?.state ? location.state : "/");
    } catch (error) {
      console.error("Google login failed: ", error);
      setError({
        ...error,
        googleLogin: error.message,
      });
      Swal.fire("Google login failed. Please try again.");
    }
  };

  return (
    <div className=" flex justify-center mt-12 bg-white min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm  md:max-w-xl shrink-0 ">
        <div className="mb-2 md:mb-8">
          <h1 className="font-bold text-3xl mb-3 md:mb-6">Log in</h1>

          <div>
            <button
              onClick={handleGoogleLogin}
              className="btn border-2 border-black bg-white hover:bg-slate-50 flex items-center justify-center w-10/12"
            >
              <img className="w-6" src={googleLogo} alt="" />
              <p className="font-semibold text-base">Continue with Google</p>
            </button>
          </div>
        </div>
        <div className="divider w-10/12">or</div>
        <form className="w-10/12" onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Your password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn border-2 border-black bg-[#f66962] text-black font-bold">
              Login
            </button>
            <p className="text-center mt-2 md:mt-6 text-[#9F9F9F]">
              Don't have an account?
              <Link to={"/signup"}>
                {" "}
                <span className="underline">Sign Up here </span>
              </Link>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
