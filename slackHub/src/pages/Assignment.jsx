import React from 'react'
import AssignmentUpload from '../components/AssignmentUpload'
import { useParams } from 'react-router-dom';
const Assignment = ({ match }) => {
  const courseId = match.params.courseId

  return (
    <div>
      <h1>Upload Assignment</h1>
      <AssignmentUpload courseId={courseId} />
    </div>
  )
}

export default Assignment
