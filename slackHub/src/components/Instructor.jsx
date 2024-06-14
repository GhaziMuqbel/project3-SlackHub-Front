import React, { useState } from 'react';
import AssignmentForm from './ AssignmentForm';

const Instructor = ({ onSubmit }) => {
  const [code, setCode] = useState('');

  const handleSubmit = () => {
    onSubmit(code);
    setCode('');
  };

  return (
    <div>
      <h2></h2>
      <AssignmentForm code={code} setCode={setCode} onSubmit={handleSubmit} />
    </div>
  );
};

export default Instructor;