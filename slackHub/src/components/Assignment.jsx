import React from 'react'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
const Assignment = async ({ onClick, title, description, courseid }) => {
  const [detail, setDetail] = useState()

  useEffect(() => {
    const getDetails = async () => {
      const response = await axios.get(
        ` http://localhost:3001/assignment/getAll/${courseid}`
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

export default Assignment
