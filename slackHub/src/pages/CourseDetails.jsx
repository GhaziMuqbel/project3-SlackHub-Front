import React from "react"
import axios from "axios"
import AddStudent from "../components/AddStudent"
import { useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

const CourseDetails = () => {
  const [students, setStudents] = useState(null)
  // const navigate = useNavigate()
  const { studentId } = useParams()

  const getStudents = async () => {
    const response = await axios.get(
      `http://localhost:3001/course/getassignments/${studentId}`
    )
    console.log(response.data)
    setStudents(response.data)
  }

  // const handleAssignmentClick = (assignmentId) => {
  //   navigate(`/course/details/${assignmentId}`)
  // }

  useEffect(() => {
    getStudents()
  }, [])
  console.log(`assignments ==> ${assignments}`)

  return (
    <div>
      {students?.map((student) => (
        <div key={student._id}>
          <AddStudent
            name={student.name}
            email={student.email}
            // onClick={() => handleAssignmentClick(assignment._id)}
          />
        </div>
      ))}
    </div>
  )
}

export default CourseDetails
