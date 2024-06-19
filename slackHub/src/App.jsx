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
    const token = localStorage.getItem('token')
    // Check if token exists before requesting to validate the token
    if (token) {
      checkToken()
    }
  }, [])
  //console.log(user.type)
  //{user.type && <Route path="/" element={<Home />} />}
  return (
    <>
      <div>
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

            <Route path="/student" element={<StudentPage />} />

            <Route path="/about" element={<About />} />

            {/* <Route path="/Course" element={<StudentPage />} /> */}

            {/* <Route path="/" exact component={<ReviewList />} />
            <Route path="/create" component={<ReviewForm />} />
            <Route path="/reviews/:id" component={<ReviewDetail />} /> */}
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
