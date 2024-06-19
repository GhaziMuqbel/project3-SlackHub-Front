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
  )
}

export default Nav
