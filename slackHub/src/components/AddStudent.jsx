import { useState } from "react"

const AddStudent = () => {
  const initialState = {
    username: "",
    email: "",
  }
  const [studentForm, setStudentForm] = useState(initialState)

  const handleChange = (event) => {
    setStudentForm({ ...studentForm, [event.target.id]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(studentForm)

    setStudentForm(initialState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div id="username" className="Form">
        <label htmlFor="username">Student name:</label>
        <input
          id="username"
          type="text"
          onChange={handleChange}
          value={studentForm.username}
        />
      </div>

      <div id="email" className="Form">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          onChange={handleChange}
          value={studentForm.email}
        />
      </div>
    </form>
  )
}

export default AddStudent
