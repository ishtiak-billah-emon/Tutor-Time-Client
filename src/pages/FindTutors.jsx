import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Tutor from "./Tutor";

const FindTutors = () => {
  const [tutors, setTutors] = useState([]);
  const [filteredTutors, setFilteredTutors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const category = new URLSearchParams(location.search).get("category");

  useEffect(() => {
    const url = category
      ? `http://localhost:3000/tutorials?category=${category}`
      : `http://localhost:3000/tutorials`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTutors(data);
        setFilteredTutors(data); 
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [category]);


  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue);

    const filtered = tutors.filter((tutor) =>
      tutor.language.toLowerCase().includes(searchValue)
    );

    setFilteredTutors(filtered);
  };

  return (
    <div className="max-w-7xl mx-auto pt-12 p-3 ">
      <h1 className="text-3xl font-bold mb-4 md:mb-12">
        {category
          ? `Online ${category} tutors & teachers for private lessons`
          : "Explore online tutors & teachers for learning a new language"}
      </h1>

      {/* Search Bar */}
      <label className="input input-bordered flex items-center gap-2 mb-6 ">
        <input
          type="text"
          className="grow"
          placeholder="Search by language"
          value={searchTerm}
          onChange={handleSearch} 
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>

      {/* Tutors List */}
      <div>
        {filteredTutors.map((tutor, index) => (
          <Tutor key={index} tutor={tutor} />
        ))}
      </div>
    </div>
  );
};

export default FindTutors;
