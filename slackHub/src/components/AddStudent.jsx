import { useState } from "react"

const AddStudent = () => {
  const initialState = {
    username: "",
    email: "",
  }
  const [formState, setFormState] = useState([])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formState)

    setFormState(initialState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div id="username" className="Form">
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          onChange={handleChange}
          value={formState.username}
        />
      </div>

      <div id="email" className="Form">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          onChange={handleChange}
          value={formState.email}
        />
      </div>
    </form>
  )
}

export default AddStudent
