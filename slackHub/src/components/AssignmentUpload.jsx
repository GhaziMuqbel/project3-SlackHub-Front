import React, { useState } from "react"
import axios from "axios"

import { useParams } from "react-router-dom"
const AssignmentUpload = () => {
  const { courseId } = useParams()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [file, setFile] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState("")

  const handleFileChange = (files) => {
    setFile(files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setUploading(true)
    setError("")

    const formData = new FormData()
    formData.append("title", title)
    formData.append("description", description)
    formData.append("file", file)

    try {
      await axios.post(
        `http://localhost:3001/assignment/${courseId}`, // Use courseId from props
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )

      // history.push(`/courses/${courseId}`) // Navigate to the course page after successful upload
    } catch (error) {
      setError("Error uploading assignment. Please try again.")
      console.error("Error uploading assignment:", error)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="homepage">
      <h2 className="homepage">Upload Assignment</h2>
      <form onSubmit={handleSubmit}>
        <div className="homepage">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="homepage">
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="homepage">
          <label>File:</label>
          <input
            type="file"
            onChange={(e) => handleFileChange(e.target.files)}
            required
          />
        </div>
        <button type="submit" disabled={uploading}>
          {uploading ? "Uploading..." : "Upload"}
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  )
}

export default AssignmentUpload
