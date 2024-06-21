import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const ReviewDetail = () => {
  const { id } = useParams()
  const [review, setReview] = useState(null)

  useEffect(() => {
    axios
      .get(`/api/reviews/${id}`)
      .then((response) => setReview(response.data))
      .catch((error) => console.error('Error fetching review:', error))
  }, [id])

  if (!review) return <div>Loading...</div>

  return (
    <div>
      <h1>Review Detail</h1>
      <p>Reviewer: {review.reviewer}</p>
      <p>Assignment: {review.assignment}</p>
      <p>Content: {review.content}</p>
      <p>Rating: {review.rating}</p>
    </div>
  )
}

export default ReviewDetail
