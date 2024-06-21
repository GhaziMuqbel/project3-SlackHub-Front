import { useState } from 'react'
import Forms from './components/Forms'
import { Route, Routes } from 'react-router'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import { CheckSession } from './services/Auth'
import Nav from './components/Nav'
import Course from './pages/Course'
import './App.css'
import { useEffect } from 'react'
import About from './pages/About'
import CourseAdd from './components/CourseAdd'
import CourseDetails from './pages/CourseDetails'
import AssignmentUpload from './components/AssignmentUpload'

import InstructorPage from './pages/InstructorPage'
import Students from './pages/Students'
//import CourseDetails from './components/ReviewDetail'
import AddStudent from './components/AddStudent'
import AssignmentDetail from './components/AssignmentDetail'


function App() {
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    console.log(`user in the checkToken  ${JSON.stringify(user)}`)
    setUser(user)
  }
  useEffect(() => {
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
        <Nav user={user} handleLogOut={handleLogOut} />
        <main>
          <Routes>
          {user ? (
    <>
      {user.type ? (
        <Route path="/instructor" element={<InstructorPage user={user} />} />
      ) : (
        <Route path="/student" element={<Students user={user} />} />
      )}
      <Route path="/view/instructorcourse/:courseId" element={<CourseDetails />} />
      <Route path="/addstudents/:courseId" element={<AddStudent />} />
      <Route path="/course/details/:assignmentId" element={<AssignmentDetail user={user} />} />
      <Route path="/about" element={<About />} />
      <Route path="/view/assignmentUpload/:courseId" element={<AssignmentUpload />} />
      <Route path="/view/course/:courseId" element={<Course user={user}/>} />
      <Route path="/addcourse/:instructorId" element={<CourseAdd />} />
      <Route path="/upload/assignment/:courseId" element={<AssignmentUpload />} />
    </>
  ) : (
    <>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn setUser={setUser} />} />
      <Route path="/register" element={<Register />} />
    </>
  )}
            
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
