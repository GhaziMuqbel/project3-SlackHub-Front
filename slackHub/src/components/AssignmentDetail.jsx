import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
const AssignmentDetail = async ({ onClick, title, description, courseid }) => {
  const [detail, setDetail] = useState()

  useEffect(() => {
    const getDetails = async () => {
      const response = await axios.get(
        ` http://localhost:3001/assignment/Details/${courseid}`
      )
      setDetail(response.data)
    }
  }, [])
  return (
    <div className="assig" onClick={detail}>
      <h2>{detail.title}</h2>
      <p>{detail.description}</p>
    </div>
  )
}

export default AssignmentDetail