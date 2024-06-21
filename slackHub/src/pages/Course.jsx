import React from "react"
import axios from "axios"
import Assignment from "../components/Assignment"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

const Course = ({user}) => {
  const [assignments, setAssignments] = useState(null)
  const navigate = useNavigate()
  const { courseId } = useParams()
  console.log(user)

  const getAssignments = async () => {
    const response = await axios.get(
      `http://localhost:3001/course/getassignments/${courseId}`
    )
    console.log(response.data)
    setAssignments(response.data)
  }

  const handleAssignmentClick = (assignmentId) => {
    navigate(`/course/details/${assignmentId}`)
  }

  useEffect(() => {
    getAssignments()
  }, [])
  console.log(`assignments ==> ${assignments}`)
  return (
    <div className="assig">
      {user?.type && (
        <button onClick={() => navigate(`/view/assignmentUpload/${courseId}`)}>
          upload Assignment
        </button>
      )}
      {assignments?.map((assignment) => (
        <div key={assignment._id}>
          <Assignment
            title={assignment.title}
           
            onClick={() => handleAssignmentClick(assignment._id)}
          />
        </div>
      ))}
    </div>
  )
}

export default Course
