import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Nav = ({ user, handleLogOut }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        {user ? (
          <>
            <Typography variant="h6" component="div" sx={{ mr: 2 }}>
              Welcome {user.email}!
            </Typography>
            <Button
              color="inherit"
              onClick={handleLogOut}
              component={Link}
              to="/"
            >
              Sign Out
            </Button>
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/register">
              Register
            </Button>
            <Button color="inherit" component={Link} to="/signin">
              Sign In
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Nav
