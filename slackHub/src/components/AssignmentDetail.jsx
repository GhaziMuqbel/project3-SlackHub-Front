import React from 'react'
import useState from 'react'
import useEffect from 'react'
import axios from 'axios'

const AssignmentDetail = ({ onClick, title, description, courseid }) => {
  const [detail, setDetail] = useState(null)

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/assignment/details/${courseid}`
        )
        setDetail(response.data) 
      } catch (error) {
        console.error('Error fetching assignment details:', error)
      }
    }

    getDetails()
  },)

  return (
    <div className="assig" onClick={onClick}>
      {detail ? (
        <>
          <h2>{detail.title}</h2>
          <p>{detail.description}</p>
        </>
      ) : (
        <p>Loading assignment details...</p>
      )}
    </div>
  )
}

export default AssignmentDetail
