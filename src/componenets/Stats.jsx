import React, { useEffect, useState } from "react";

const Stats = () => {
  const [tutorCount, setTutorCount] = useState(0);
  const [languageCount, setLanguageCount] = useState(0);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/tutorials")
      .then((res) => res.json())
      .then((data) => {
        const uniqueEmails = new Set(data.map((tutor) => tutor.email));
        setTutorCount(uniqueEmails.size);

        const uniqueLanguages = new Set(data.map((tutor) => tutor.language));
        setLanguageCount(uniqueLanguages.size);
      })
      .catch((error) => console.error("Error fetching tutorials:", error));

    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUserCount(data.length))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 mt-6 gap-2 md:gap-4 md:mt-12 p-4 md:p-0">
      {/* Tutor */}
      <button className="py-2 h-auto disabled bg-[#dcf7fe] rounded-md">
        <div className="flex flex-col">
          <h1 className="text-lg md:text-2xl md:font-bold">{tutorCount}</h1>
          <p className="font-thin">Experienced Tutor</p>
        </div>
      </button>
      {/* Review */}

      {/* language */}
      <button className="py-2 h-auto disabled bg-[#fdf3e9] rounded-md">
        <div className="flex flex-col">
          <h1 className="text-lg md:text-2xl md:font-bold">{languageCount}</h1>
          <p className="font-thin">Total Languages</p>
        </div>
      </button>

      {/* users */}
      <button className=" py-2 h-auto disabled bg-[#efeff7] rounded-md">
        <div className="flex flex-col">
          <h1 className="text-lg md:text-2xl md:font-bold">{userCount}</h1>
          <p className="font-thin">Total users</p>
        </div>
      </button>
    </div>
  );
};

export default Stats;
