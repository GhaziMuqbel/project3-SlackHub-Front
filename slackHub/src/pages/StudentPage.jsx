import React from 'react'
import Student from '../components/Student'

const StudentPage = () => {
  const assignment = `function greet() {
  return 'Hello, world!';
}`

  return (
    <div>
      <h1></h1>
      <Student assignment={assignment} />
    </div>
  )
}

export default StudentPage
