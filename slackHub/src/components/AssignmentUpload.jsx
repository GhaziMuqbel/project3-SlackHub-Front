import React, { useState } from 'react'
import axios from 'axios'

import { useParams } from 'react-router-dom'
import AceEditor from 'react-ace'

import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-github'




const AssignmentUpload = () => {
  
  const { courseId } = useParams()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState(null)
  const [code, setCode] = useState('')
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const [uploadType, setUploadType] = useState('file')

  const handleFileChange = (files) => {
    setFile(files[0])
  }

  const handleCodeChange = (newCode) => {
    setCode(newCode)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setUploading(true)
    setError('')

    const formData = new FormData()
    formData.append('title', title)
    formData.append('description', description)
    if (uploadType === 'file') {
      formData.append('file', file)
    } else {
      formData.append('code', code)
    }

    try {
      await axios.post(
        `http://localhost:3001/assignment/${courseId}`, // Use courseId from props
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
    } catch (error) {
      setError('Error uploading assignment. Please try again.')
      console.error('Error uploading assignment:', error)
    } finally {
      setUploading(false)
    }


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
          <label>Upload Type:</label>
          <select
            value={uploadType}
            onChange={(e) => setUploadType(e.target.value)}
          >
            <option value="file">File</option>
            <option value="code">Code</option>
          </select>
        </div>
        {uploadType === 'file' ? (
          <div>
            <label>File:</label>
            <input
              type="file"
              onChange={(e) => handleFileChange(e.target.files)}
              required
            />
          </div>
        ) : (
          <div>
            <label>Code:</label>
            <AceEditor
              mode="javascript"
              theme="github"
              onChange={handleCodeChange}
              value={code}
              name="code-editor"
              editorProps={{ $blockScrolling: true }}
              setOptions={{ useWorker: false }}
              width="100%"
              height="400px"
              required
            />
          </div>
        )}
        <button type="submit" disabled={uploading}>
          {uploading ? 'Uploading...' : 'Upload'}

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