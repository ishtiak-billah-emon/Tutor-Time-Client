import React, { useEffect, useState } from 'react';
import Tutor from './Tutor';

const FindTutors = () => {
  const [tutors, setTutors] = useState([]);
  useEffect(()=>{
    fetch(`http://localhost:3000/tutorials`)
    .then(res=>res.json())
    .then(data =>setTutors(data));
  },[]
  )
  return (
    <div>
      {
        tutors.map((tutor, index) => (
            <Tutor key={index} tutor={tutor} ></Tutor>
        ))
      }
    </div>
  );
};

export default FindTutors;