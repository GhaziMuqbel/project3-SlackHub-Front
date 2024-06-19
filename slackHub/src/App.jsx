import { useState } from 'react'
import Forms from './components/Forms'
import { Route, Routes } from 'react-router'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import { CheckSession } from './services/Auth'
import Nav from './components/Nav'

import './App.css'
import { useEffect } from 'react'
import About from './pages/About'
import { BrowserRouter as Router } from 'react-router-dom'
import Assignment from './pages/Assignment'

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
    const token = localStorage.getItem('token')

    if (token) {
      checkToken()
    }
  }, [])

  return (
    <>
      <div>
        <Nav user={user} handleLogOut={handleLogOut} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn setUser={setUser} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/courses/:courseId/upload" component={Assignment} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
