import React, { useState } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'


const AssignmentUpload = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [description, setDescription] = useState("");
  const { courseId } = useParams()

  const submitAssignment= async(e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description",description );
    formData.append("file", file);
    console.log(title)
    console.log(description)
    console.log(file)
    const response = await axios.post(`http://localhost:3001/assignment/new/${courseId}`,formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
    })
      console.log(response)
  }
  
  return (
    <div>
      <form onSubmit={submitAssignment}>
        <label >Title of the Assignment<br/><br/>
        <input type="text" placeholder='Enter Title' required onChange={(e) => setTitle(e.target.value)}/>
        </label>
        <label >Description of the Assignment<br/><br/>
        <input type="text" placeholder='Description' required onChange={(e) => setDescription(e.target.value)}/>
        </label>
        <label >Choose File<br/><br/>
        <input type="file" accept="application/pdf" required onChange={(e) => setFile(e.target.files[0])}/>
        </label>
          <br/><br/>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}
export default AssignmentUpload