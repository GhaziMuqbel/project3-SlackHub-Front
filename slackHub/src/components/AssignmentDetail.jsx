import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const AssignmentDetail = ({ user }) => {
  const { assignmentId } = useParams()
  const [detail, setDetail] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/assignment/getdetails/${assignmentId}`
        )
        setDetail(response.data)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching assignment details:', error)
        setIsLoading(false)
      }
    }

    const getNotes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/notes/get/${assignmentId}`
        )
        console.log('Notes response:', response.data)
        setNotes(response.data.split('\n'))
      } catch (error) {
        console.error('Error fetching notes:', error)
        setNotes([])
      }
    }

    getDetails()
    getNotes()
  }, [assignmentId])

  const handleNoteSubmit = async (e) => {
    e.preventDefault()
    if (!newNote.trim()) return

    try {
      const response = await axios.post(`http://localhost:3001/notes/add`, {
        assignmentId,
        content: newNote,
        userId: user.id,
        userName: user.name
      })
      setNotes(response.data.notes.split('\n'))
      setNewNote('')
    } catch (error) {
      console.error('Error adding note:', error)
    }
  }

  const handleUploadClick = () => {
    navigate(`/view/assignmentUpload/${detail.course}`)
  }

  const showPdf = (pdfFile) => {
    window.open(`http://localhost:3001/uploads/${pdfFile}`)
    console.log(pdfFile)
  }

  return (
    <div className="assignment-detail">
      {!isLoading ? (
        <>
          {user?.type === false && (
            <button onClick={handleUploadClick}>Upload Assignment</button>
          )}
          <h2>{detail?.title}</h2>
          <p>{detail?.description}</p>

          <div className="discussion-board">
            <h3>Discussion Board</h3>
            <form onSubmit={handleNoteSubmit}>
              <textarea
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                placeholder="Write your note here..."
              />
              <button type="submit">Add Note</button>
            </form>
            <div className="notes">
              {notes.length > 0 ? (
                notes.map((note, index) => (
                  <div key={index} className="note">
                    <p>{note}</p>
                  </div>
                ))
              ) : (
                <p>No notes yet.</p>
              )}
            </div>
          </div>
        </>
      ) : (
        <p>Loading assignment details...</p>
      )}
      <button onClick={() => showPdf(detail?.assignfile?.pdf)}>
        Show File
      </button>
    </div>
  )
}

export default AssignmentDetail
