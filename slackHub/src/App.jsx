import { useState } from "react"
// import Forms from "./components/Forms"
import { Route, Routes } from "react-router"
import Register from "./pages/Register"
import SignIn from "./pages/SignIn"
import Home from "./pages/Home"
import { CheckSession } from "./services/Auth"
import Nav from "./components/Nav"
import InstructorPage from './pages/InstructorPage';
import StudentPage from './pages/StudentPage';
import "./App.css"
import { useEffect } from "react"

function App() {
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    localStorage.clear()
  }
  const checkToken = async () => {
    //If a token exists, sends token to localStorage to persist logged in user
    const user = await CheckSession()
    setUser(user)
  }
  useEffect(() => {
    const token = localStorage.getItem("token")
    // Check if token exists before requesting to validate the token
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <>
      <div>
        {/* <Forms /> */}
        <Nav user={user} handleLogOut={handleLogOut} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn setUser={setUser} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/instructor" element={<InstructorPage />} />
            <Route path="/student" element={<StudentPage />} />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
