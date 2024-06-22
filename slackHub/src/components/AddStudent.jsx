import { useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material"
import axios from "axios"

const AddStudent = () => {
  const initialState = {
    username: "",
    email: "",
  }
  const [studentForm, setStudentForm] = useState(initialState)
  const { studentId } = useParams()
  const navigate = useNavigate()

  const handleChange = (event) => {
    setStudentForm({ ...studentForm, [event.target.id]: event.target.value })
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   console.log(studentForm)

  //   setStudentForm(initialState)
  // }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        ` http://localhost:3001/course/addStudent/${studentId}`,
        studentForm
      )
      //console.log("Course created successfully!", response.data)
    } catch (err) {
      console.error(`error in adding new course ${err}`)
    }
    setStudentForm({
      username: "",
      email: "",
    })
    navigate("/")
  }

  return (
    <div className="signincol">
      <Typography variant="h4" gutterBottom>
        Add New Students
      </Typography>
      <form onSubmit={handleSubmit}>
        <div id="username" className="Form">
          <label htmlFor="username">Student name:</label>
          <TextField
            id="username"
            type="text"
            onChange={handleChange}
            value={studentForm.username}
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
        </div>

        <div id="email" className="Form">
          <label htmlFor="email">Email:</label>
          <TextField
            id="email"
            type="email"
            onChange={handleChange}
            value={studentForm.email}
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
        </div>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Add Student
        </Button>
      </form>
    </div>
  )
}

export default AddStudent
