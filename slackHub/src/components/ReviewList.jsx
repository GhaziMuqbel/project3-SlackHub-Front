import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ReviewList = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    axios
      .get('/api/reviews')
      .then((response) => setReviews(response.data))
      .catch((error) => console.error('Error fetching reviews:', error))
  }, [])

  return (
    <div>
      <h1>Reviews</h1>
      <Link to="/create">Create a Review</Link>
      <ul>
        {reviews.map((review) => (
          <li key={review._id}>
            <Link to={`/reviews/${review._id}`}>{review.content}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ReviewList
