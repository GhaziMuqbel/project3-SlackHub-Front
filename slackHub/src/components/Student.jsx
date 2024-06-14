import React, { useState } from 'react';
import AssignmentForm from './ AssignmentForm';

const Student = ({ assignment }) => {
  const [code, setCode] = useState(assignment);

  const handleSubmit = () => {
    
    alert('Assignment submitted: ' + code);
  };

  return (
    <div>
      <h2></h2>
      <AssignmentForm code={code} setCode={setCode} onSubmit={handleSubmit} />
    </div>
  );
};

export default Student;