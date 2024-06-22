import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AssignmentDetail = ({ courseid }) => {
  const [detail, setDetail] = useState(null);
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/assignment/getdetails/${courseid}`);
        console.log(response.data);
        setDetail(response.data);
        // Assuming response.data contains an array of notes
        setNotes(response.data.notes || []);
      } catch (error) {
        console.error('Error fetching assignment details:', error);
      }
    };

    if (courseid) {
      getDetails();
    }
  }, [courseid]);

  const handleNoteSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3001/assignment/${courseid}/addnote`, {
        note: newNote,
      });
      setNotes([...notes, response.data]);
      setNewNote('');
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  return (
    <div className="assig">
      {detail ? (
        <>
          <h2>{detail.title}</h2>
          <p>{detail.description}</p>
        </>
      ) : (
        <p>Loading assignment details...</p>
      )}
      
      <div className="notes-section">
        <h3>Notes</h3>
        <form onSubmit={handleNoteSubmit}>
          <textarea
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Add a note for this assignment"
            required
          ></textarea>
          <button type="submit">Add Note</button>
        </form>
        <div className="notes-list">
          {notes.map((note, index) => (
            <div key={index} className="note">
              {note}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetail;
