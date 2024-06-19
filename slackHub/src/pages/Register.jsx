import React, { useState } from 'react'
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'

const Register = () => {
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: true
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      username: formValues.username,
      email: formValues.email,
      password: formValues.password
    })
    setFormValues({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      userType: true
    })
    navigate('/signin')
  }

  return (
    <div className="signincol">
      <Typography variant="h4" gutterBottom>
        Register
      </Typography>
      <form className="col" onSubmit={handleSubmit}>
        <TextField
          label="Username"
          name="username"
          type="text"
          value={formValues.username}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formValues.email}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={formValues.password}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={formValues.confirmPassword}
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

              name="username"
              type="text"
              placeholder="John Smith"
              value={formValues.username}
              required
            />
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={formValues.email}
              required
            />
          </div>

          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <div className="confirmPassword">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              required
            />
          </div>

          <div className="userType">
            <label htmlFor="userType">User Type</label>
            <input
              onChange={handleChange}
              type="checkBox"

              name="userType"
            />
          }
          label="User Type"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={
            !formValues.email ||
            formValues.password !== formValues.confirmPassword ||
            !formValues.userType
          }
        >
          Register
        </Button>
      </form>
    </div>
  )
}

export default Register
