import React, { useState } from 'react'
import axios from 'axios'

const AssignmentUpload = ({ courseId, user }) => {
  const history = useHistory()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')

  const handleFileChange = (files) => {
    setFile(files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setUploading(true)

    const formData = new FormData()
    formData.append('title', title)
    formData.append('description', description)
    formData.append('file', file)

    try {
      await axios.post(`/api/assignments/${courseId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      history.push(`/courses/${courseId}`)
    } catch (error) {
      setError('Error uploading assignment. Please try again.')
      console.error('Error uploading assignment:', error)
    } finally {
      setUploading(false)
    }
  }

  if (!user || !user.isInstructor) {
    return (
      <div>You are not authorized to upload assignments for this course.</div>
    )
  }

  return (
    <div>
      <h2>Upload Assignment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>File:</label>
          <DropzoneArea
            onChange={handleFileChange}
            acceptedFiles={['.js', '.jsx', '.java', '.cpp', '.py']}
            dropzoneText="Drag and drop an assignment file here or click"
            filesLimit={1}
            showAlerts={false}
          />
        </div>
        <button type="submit" disabled={uploading}>
          {uploading ? 'Uploading...' : 'Upload'}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  )
}

export default AssignmentUpload
