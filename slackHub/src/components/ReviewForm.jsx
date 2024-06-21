// import React, { useState } from 'react'
// import axios from 'axios'
// import { useHistory } from 'react-router-dom'

// const ReviewForm = () => {
//   const [reviewer, setReviewer] = useState('')
//   const [assignment, setAssignment] = useState('')
//   const [content, setContent] = useState('')
//   const [rating, setRating] = useState(1)
//   const history = useHistory()

//   const handleSubmit = (event) => {
//     event.preventDefault()
//     const newReview = { reviewer, assignment, content, rating }

//     axios
//       .post('/api/reviews', newReview)
//       .then((response) => {
//         console.log('Review created:', response.data)
//         history.push('/')
//       })
//       .catch((error) => console.error('Error creating review:', error))
//   }

//   return (
//     <div>
//       <h1>Create a Review</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Reviewer</label>
//           <input
//             type="text"
//             value={reviewer}
//             onChange={(e) => setReviewer(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Assignment</label>
//           <input
//             type="text"
//             value={assignment}
//             onChange={(e) => setAssignment(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Content</label>
//           <textarea
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//           ></textarea>
//         </div>
//         <div>
//           <label>Rating</label>
//           <input
//             type="number"
//             min="1"
//             max="5"
//             value={rating}
//             onChange={(e) => setRating(e.target.value)}
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   )
// }

// export default ReviewForm
