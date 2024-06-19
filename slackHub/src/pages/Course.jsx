import React from "react"
import axios from "axios"
import Assignment from "../components/Assignment"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Course = () => {
  const [assignments, setAssignments] = useState([])
  const navigate = useNavigate()

  const getAssignments = async () => {
    const response = await axios.get("http://localhost:3001/assignment")

    setAssignments(response.data.results)
  }

  const handleAssignmentClick = (assignmentId) => {
    navigate(`/course/details/${assignmentId}`)
  }

  useEffect(() => {
    getAssignments()
  }, [])

  return (
    <div>
      {assignments.map((assignment) => (
        <Assignment
          key={assignment.id}
          title={assignment.title}
          description={assignment.description}
          onClick={() => handleAssignmentClick(assignment.id)}
        />
      ))}
    </div>
  )
}

export default Course
