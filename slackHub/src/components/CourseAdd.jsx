import React, { useState } from "react"
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import axios from "axios"

const Register = ({ instructorId }) => {
  const navigate = useNavigate()
  const { instructorId } = useParams()

  const [formValues, setFormValues] = useState({
    courseName: "",
    Description: "",
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        ` http://localhost:3001/course/newCourse/${instructorId}`,
        formValues
      )
      console.log("Course created successfully!", response.data)
    } catch (err) {
      console.error(`error in adding new course ${err}`)
    }
    setFormValues({
      courseName: "",
      Description: "",
    })
    navigate("/")
  }

  return (
    <div className="signincol">
      <Typography variant="h4" gutterBottom>
        Add New Course
      </Typography>
      <form className="col" onSubmit={handleSubmit}>
        <TextField
          label="Course Name"
          name="courseName"
          type="text"
          value={formValues.courseName}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        <TextField
          label="Description"
          name="Description"
          type="text"
          value={formValues.Description}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={formValues.userType}
              onChange={handleChange}
              name="userType"
            />
          }
          label="User Type"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Add Course
        </Button>
      </form>
    </div>
  )
}

export default Register
