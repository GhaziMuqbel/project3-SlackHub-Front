import React from 'react'
import axios from 'axios'
import AddStudent from '../components/AddStudent'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {
  const [students, setStudents] = useState(null)
  const navigate = useNavigate()
  const { courseId } = useParams()

  useEffect(() => {
    const getStudents = async () => {
      const response = await axios.get(
        `http://localhost:3001/course/getDetails/${courseId}`
      )
      console.log(response.data)
      setStudents(response.data)
    }
    getStudents()
  }, [])

  return students ? (
    <div>
      <div>
        {' '}
        <button onClick={() => navigate(`/addstudents/${courseId}`)}>
          Add Students
        </button>
      </div>
      {students.name}
      {students.Description}
      {students?.Students.map((student) => (
        <div key={student._id}>
          {student.username}
          {student.email}
        </div>
      ))}
    </div>
  ) : (
    <div>LOADING</div>
  )
}

export default CourseDetails
