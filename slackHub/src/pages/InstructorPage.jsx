import React from 'react';
import Instructor from '../components/Instructor';

const InstructorPage = () => {
  const handleSubmit = (code) => {
    // Handle submission logic for instructors (e.g., send to server)
    console.log('Assignment submitted by instructor:', code);
  };

  return (
    <div>
      <h1>Instructor Page</h1>
      <Instructor onSubmit={handleSubmit} />
    </div>
  );
};

export default InstructorPage;