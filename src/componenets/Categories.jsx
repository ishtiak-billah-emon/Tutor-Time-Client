import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Arrow from "../assets/Images/rightarrow.png";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/tutorials")
      .then((res) => res.json())
      .then((data) => {
        const distinctLanguages = data.reduce((acc, item) => {
          if (!acc.includes(item.language)) {
            acc.push(item.language);
          }
          return acc;
        }, []);
        setCategories(distinctLanguages);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section className="p-4 md:p-0">
      <h1 className="text-lg font-semibold mb-4 md:text-3xl md:font-bold md:my-12">Discover the Perfect Tutor for Your Learning Journey</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4 ">
        {categories.map((category, index) => (
          <button
            key={index}
            className=" btn font-bold border-2 border-black bg-white text-base py-2 h-auto hover:bg-[#f66962] hover:border-black flex gap-2 items-center justify-around "
            onClick={() => navigate(`/find-tutors?category=${category}`)}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
                focusable="false"
              >
                <g id="Frame 316128405">
                  <g id="Group 316127862">
                    <circle
                      id="Ellipse 8"
                      cx="24"
                      cy="23"
                      r="4"
                      fill="#121117"
                      stroke="#121117"
                      stroke-width="2"
                    ></circle>
                    <path id="Vector 1" stroke="#fff" d="M24 20.5V23h2"></path>
                    <path
                      id="Rectangle 4438"
                      stroke="#121117"
                      stroke-width="2"
                      d="M18 31h12v13H18z"
                    ></path>
                    <path
                      id="Rectangle 4439"
                      stroke="#121117"
                      stroke-width="2"
                      d="M16 15h16v16H16z"
                    ></path>
                    <path
                      id="Rectangle 4440"
                      fill="#121117"
                      d="M14 14h20v2H14z"
                    ></path>
                    <path
                      id="Rectangle 4444"
                      fill="#121117"
                      d="M14 30h20v2H14z"
                    ></path>
                    <path
                      id="Rectangle 4441"
                      fill="#121117"
                      d="M17 11h14v2H17z"
                    ></path>
                    <path
                      id="Rectangle 4442"
                      fill="#121117"
                      d="M19 8h10v2H19z"
                    ></path>
                    <path
                      id="Rectangle 4443"
                      fill="#121117"
                      d="M23.333 3h1.334L26 7h-4z"
                    ></path>
                    <path
                      id="Rectangle 4445"
                      fill="#121117"
                      d="M21 34h2v7h-2z"
                    ></path>
                    <path
                      id="Rectangle 4446"
                      fill="#121117"
                      d="M25 34h2v7h-2z"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
            <h1>{category}</h1>
            <div>
              <img src={Arrow} alt="" />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Categories;
