import React from 'react'
import {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'

const AssignmentDetail = ({ onClick , user}) => {
  const [detail, setDetail] = useState(null)
  const navigate = useNavigate()

  const {assignmentId} = useParams()
  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/assignment/getdetails/${assignmentId}`
        )
        console.log(response)
        setDetail(response.data) 

      } catch (error) {
        console.error('Error fetching assignment details:', error)
      }
    }

    getDetails()
  },[])

  const courseId = detail?.course
  console.log(courseId)
  return (
    <div className="assig" onClick={onClick}>
      {user?.type === false && (
       <button onClick={() => navigate(`/view/assignmentUpload/${courseId}`)}>
       upload Assignment
     </button>
      )}
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
