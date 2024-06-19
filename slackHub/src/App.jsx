<<<<<<< HEAD
import { useState } from 'react'
import Forms from './components/Forms'
import { Route, Routes } from 'react-router'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import { CheckSession } from './services/Auth'
import Nav from './components/Nav'
import InstructorPage from './pages/InstructorPage'
import StudentPage from './pages/StudentPage'
import './App.css'
import { useEffect } from 'react'
import About from './pages/About'
=======
import { useState } from "react"
import Forms from "./components/Forms"
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
  /*
  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }*/
    const checkUser = () => {
      // Retrieve user details from localStorage
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    };
  useEffect(() => {
<<<<<<< HEAD
    const token = localStorage.getItem('token')
    // Check if token exists before requesting to validate the token
    if (token) {
      checkToken()
    }
  }, [])
  console.log(`user in the app.jsx file ${JSON.stringify(user)}`)

  return (
    <>
      <div>
       
        
>>>>>>> origin/osama
        <Nav user={user} handleLogOut={handleLogOut} />
        <main>
          <Routes>
            {user ? (
              user.type ? (
                <Route path="/" element={<Home />} />
              ) : (
                <Route path="/instructor" element={<InstructorPage />} />
              )
            ) : null}
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
