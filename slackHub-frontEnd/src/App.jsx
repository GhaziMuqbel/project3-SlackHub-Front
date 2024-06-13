import { useState } from "react"
import Forms from "./components/Forms"
import Register from "./pages/Register"
import SignIn from "./pages/SignIn"

import "./App.css"
const [user, setUser] = useState(null)

function App() {
  return (
    <>
      <div>
        <SignIn setUser={setUser} />
      </div>
    </>
  )
}

export default App
