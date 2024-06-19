import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'


  let userOptions
  if (user) {
    userOptions = (
      <nav>
        <h3>Welcome {user.email}!</h3>
        <Link onClick={handleLogOut} to="/">
          Sign Out
        </Link>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
      <h1>Course Page</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  )

  return (
    <header>
      <Link to="/"></Link>
      {user ? userOptions : publicOptions}
    </header>

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
