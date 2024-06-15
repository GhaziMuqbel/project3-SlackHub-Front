import { Link } from "react-router-dom"

const Nav = ({ user, handleLogOut }) => {
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
      {/* <Link to="/">Home</Link> */}
      <div className="register">
        <Link to="/register">Register</Link>
      </div>

      <div className="signin">
        <Link to="/signin">Sign In</Link>
      </div>
    </nav>
  )

  return (
    <header>
      <Link to="/">
        <div className="logo-wrapper" alt="logo">
          <img
            className="logo"
            src="https://avatars.dicebear.com/api/gridy/app.svg"
            alt="welcome banner"
          />
        </div>
      </Link>
      {user ? userOptions : publicOptions}
    </header>
  )
}

export default Nav
