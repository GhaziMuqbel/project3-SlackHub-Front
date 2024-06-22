import CourseCard from "../components/CourseCard"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Home = () => {
  return (
    <div className="homepage">
      <img
        className="logo"
        src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/567/953/datas/original.png"
        alt="Logo"
      />
      <h1 className="homepage">.. Welcome to Learners net website ..</h1>
      <h3>Learners net website helps you to learn new skills easily:</h3>
      <li>To be able to use our website you must register first</li>
      <li>
        You will have some courses that are available, choose the course that
        you like to join and sign in
      </li>
      <li>
        The course will include a discussion so you will be able to reach your
        instructure and other students
      </li>
      <li>
        The course also will include assignments to work on and submit them to
        be graded by the instructure
      </li>
    </div>
  )
}

export default Home
