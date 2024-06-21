import React, { useState, useEffect } from 'react'; // Correct import for useState and useEffect
import axios from 'axios';

const AssignmentDetail = ({ onClick, courseid }) => {
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/assignment/details/${courseid}`);
        setDetail(response.data);
      } catch (error) {
        console.error('Error fetching assignment details:', error);
      }
    };

    if (courseid) {
      getDetails();
    }
  }, [courseid]); // Adding courseid as a dependency to useEffect

  return (
    <div className="assig" onClick={onClick}>
      {detail ? (
        <>
          <h2>{detail.title}</h2>
          <p>{detail.description}</p>
        </>
      ) : (
        <p>Loading assignment details...</p>
      )}
    </div>
  );
};

export default AssignmentDetail;

