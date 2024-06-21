import CourseCard from '../components/CourseCard'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Students = ({user}) => {
  const [courses, setCourses] = useState([])
  const navigate = useNavigate()

  const handleCourseClick = (courseId) => {
    navigate(`/view/course/${courseId}`)
  }

  useEffect(() => {
    const fetchCourses = async () => {
        try {
          const response = await axios.get('http://localhost:3001/course/getcourses')
          // Filter courses to only include those where the user is enrolled
          const filteredCourses = response.data.filter(course => (
            course.Students.some(student => student === user?.id)
          ))
          setCourses(filteredCourses)
        } catch (error) {
          console.error('Error fetching courses:', error)
        }
      }
      fetchCourses()
  }, [])

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

export default Students
