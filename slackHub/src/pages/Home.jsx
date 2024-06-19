import Course from "./Course"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const [courses, setCourses] = useState([])
  const navigate = useNavigate()

  const getCourse = async () => {
    const response = await axios.get("http://localhost:3001/course")
    setCourses(response.data.results)
  }

  const handleCourseClick = (courseId) => {
    navigate(`/view/course/${courseId}`)
  }

  useEffect(() => {
    getCourse()
  }, [])

  return (
    <div>
      <section>
        {courses.map((course) => (
          <Course
            key={course.id}
            title={course.title}
            description={assignment.description}
            onClick={() => handleCourseClick(course.id)}
          />
        ))}
      </section>
    </div>
  )
}

export default Home
