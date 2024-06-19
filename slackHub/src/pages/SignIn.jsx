import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { SignInUser } from '../services/Auth';

const SignIn = ({ setUser }) => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = await SignInUser(formValues);
    setFormValues({ email: '', password: '' });
    setUser(payload);
    navigate('/');
  };

  return (
    <div className="signincol">
      <Typography variant="h4" gutterBottom>
        Sign In
      </Typography>
      <form className="col" onSubmit={handleSubmit}>
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
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={!formValues.email || !formValues.password}
        >
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default SignIn;

