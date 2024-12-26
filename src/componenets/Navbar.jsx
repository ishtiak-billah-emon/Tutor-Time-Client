import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const navigate = useNavigate();
  const location = useLocation();
  const link = (
    <>
      <li>
        {" "}
        <NavLink to="/" className="text-[#716a90] font-semibold">
          Home
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/find-tutors" className="text-[#716a90] font-semibold">
          Find Tutors
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/addTutorials" className="text-[#716a90] font-semibold">
          Add Tutorials
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/myTutorials" className="text-[#716a90] font-semibold">
          My Tutorials
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/bookedTutorial" className="text-[#716a90] font-semibold">
          My Booked tutors
        </NavLink>
      </li>
    </>
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <section
      className={location?.pathname == "/" ? "bg-[#fef0ef]" : "bg-white"}
    >
      <div className="navbar  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            TutorTime
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>

        {/* Nav-End */}
        <div className="navbar-end">

          {/* Theme Controller */}
          <label className="grid cursor-pointer place-items-center mr-3">
            <input
              type="checkbox"
              className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
              checked={theme === "dark"}
              onChange={handleToggle}
            />
            <svg
              className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
          {user?.email ? (
            <>
              <div className="dropdown dropdown-end mr-3">
                {/* Profile Picture */}
                <div tabIndex={0} className="avatar cursor-pointer">
                  <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
                    <img src={user?.photoURL} alt="User Avatar" />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-white shadow rounded-box w-52 mt-3 p-2 z-50"
                >
                  <li className="text-gray-600 font-semibold px-3 py-2">
                    {user.displayName}
                  </li>
                </ul>
              </div>
              <button
                onClick={logOut}
                className="btn  text-white bg-[#f66962] px-8 py-2"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="btn text-white bg-[#f66962] px-8 py-3">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
