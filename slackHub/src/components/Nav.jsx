import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material/styles'

// Define a custom theme with purple colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#7e57c2' // Purple color
    },
    secondary: {
      main: '#ffffff' // White color for contrast
    }
  }
})

const Nav = ({ user, handleLogOut }) => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img
                src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/567/953/datas/original.png"
                alt="Logo"
                style={{ width: '50px', marginRight: '10px' }}
              />
              
            </Link>
          </Typography>
          <div>
            <Link
              to="/about"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                marginRight: '20px'
              }}
            >
              <Button color="secondary">About Us</Button>
            </Link>
            {user ? (
              <>
                <Button color="secondary" onClick={handleLogOut}>
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Link
                  to="/register"
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    marginRight: '20px'
                  }}
                >
                  <Button color="secondary">Register</Button>
                </Link>
                <Link
                  to="/signin"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <Button color="secondary">Sign In</Button>
                </Link>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}

export default Nav
