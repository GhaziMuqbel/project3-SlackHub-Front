import CourseCard from "../components/CourseCard"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Home = () => {
  const [courses, setCourses] = useState([])
  const navigate = useNavigate()

  const getCourse = async () => {
    const response = await axios.get("http://localhost:3001/course/getcourses")
    console.log(response.data)
    setCourses(response.data)
  }

  const handleCourseClick = (courseId) => {
    navigate(`/view/course/${courseId}`)
  }

  useEffect(() => {
    getCourse()
  }, [])
  console.log(`courses ==> ${courses}`)
  return (
    <div>
      <section>
        {courses.map((course) => (
          <div key={course._id}>
            <CourseCard
              title={course.name}
              description={course.Description}
              onClick={() => handleCourseClick(course._id)}
            />
          </div>
        ))}
      </section>
    </div>
  )
}

export default Home
