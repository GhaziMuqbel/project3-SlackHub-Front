import { useState } from "react"
// import Forms from './components/Forms'
import { Route, Routes } from "react-router"
import Register from "./pages/Register"
import SignIn from "./pages/SignIn"
import Home from "./pages/Home"
import { CheckSession } from "./services/Auth"
import Nav from "./components/Nav"
import InstructorPage from "./pages/InstructorPage"
//import StudentPage from "./pages/StudentPage"
import Course from "./pages/Course"
import "./App.css"
import { useEffect } from "react"
import About from "./pages/About"
import CourseAdd from './components/CourseAdd'

function App() {
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
  }
  const checkToken = async () => {
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
  console.log(`user in the app.jsx file ${JSON.stringify(user)}`)

  return (
    <>
      <div>
        <Nav user={user} handleLogOut={handleLogOut} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/signin" element={<SignIn setUser={setUser} />} />

            <Route path="/register" element={<Register />} />

             <Route path="/instructor" element={<InstructorPage user={user}/>} /> 
            {/* <Route path="/student" element={<StudentPage />} /> */}

            <Route path="/about" element={<About />} />

            <Route path="/view/course/:courseId" element={<Course />} />
            <Route path="/addcourse" element={<CourseAdd />} />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
