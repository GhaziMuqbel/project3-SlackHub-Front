import { useState } from "react"
import Forms from "./components/Forms"
import Instructor from './components/Instructor';
import Student from './components/Student';
import "./App.css"

function App() {
  return (
    <>
    <Router>
      <div>
        <Forms />
        <Switch>
          <Route path="/instructor" component={Instructor} />
          <Route path="/student" component={Student} />
        </Switch>
      </div>
      </Router>
    </>
  )
}

export default App
