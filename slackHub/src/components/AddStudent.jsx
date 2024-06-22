import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { FormControl, InputLabel, Select, MenuItem, Button, Typography 
} from "@mui/material"
import axios from "axios"

const AddStudent = () => {
  const initialState = {
    username: "",
    email: "",
  }
  const [students, setStudents] = useState(null)
  const [selectedStudent, setSelectedStudent] = useState("");

  const navigate = useNavigate()
  const {courseId} = useParams()
  const handleChange = (event) => {
    setSelectedStudent(event.target.value);
    console.log(selectedStudent)
  };

useEffect(()=>{
  const fetchStudents = async()=>{
    try{
      const getStudents  = await axios.get('http://localhost:3001/users/getStudents')
      console.log(getStudents.data)
      setStudents(getStudents.data)

    }
    catch(err){
      console.error(`Error loading Student Data ${err}`)
    }
  }
  fetchStudents()
},[])
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.put(
        ` http://localhost:3001/course/addStudent/${courseId}`,
        { StudentID: selectedStudent }
      )
      //console.log("Course created successfully!", response.data)
    } catch (err) {
      console.error(`error in adding new course ${err}`)
    }
    navigate(`/view/instructorcourse/${courseId}`);
  }

  return (
    <div className="signincol">
      <Typography variant="h4" gutterBottom>
        Add New Student
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel id="student-select-label">Select Student</InputLabel>
          <Select
            labelId="student-select-label"
            id="student-select"
            value={selectedStudent}
            onChange={handleChange}
            label="Select Student"
            required
          >
            {students?.map((student) => (
              <MenuItem key={student._id} value={student._id}>
                {student.username}
              </MenuItem>
            ))}
          </Select>
          </FormControl>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Add Student
        </Button>
      </form>
    </div>
  )
}

export default AddStudent
