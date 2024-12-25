import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TutorDetails = () => {
  const param = useParams();
  const id = param.details;
  useEffect(()=>{

  },[id]);
  return (
    <div>
      gg
    </div>
  );
};

export default TutorDetails;