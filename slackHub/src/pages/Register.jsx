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
    userType: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormValues({ ...formValues, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      username: formValues.username,
      email: formValues.email,
      password: formValues.password,
      userType: formValues.userType
    })
    setFormValues({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      userType: false
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
              name="userType"
            />
          }
          label="Instructor "
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={
            !formValues.email ||
            formValues.password !== formValues.confirmPassword 
          }
        >
          Register
        </Button>
      </form>
    </div>
  )
}

export default Register
