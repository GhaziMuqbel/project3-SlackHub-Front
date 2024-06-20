import CourseCard from '../components/CourseCard'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CourseAdd from '../components/CourseAdd'
import axios from 'axios'

const InstructorPage = ({ user }) => {
  const [courses, setCourses] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  const handleCourseClick = (courseId) => {
    navigate(`/view/instructorcourse/${courseId}`)
  }

  useEffect(() => {
    console.log(user)
    if (user) {
      setIsLoading(false)
    }
    const getCourse = async () => {
      const response = await axios.get(
        'http://localhost:3001/course/getcourses'
      )

      setCourses(response.data)
    }
    getCourse()
  }, [user])
  console.log(`courses on the instructor page ==> ${courses}`)
  console.log(`instructor ID ${user?.id}`)

  if (isLoading) {
    return <p>Loading...</p>
  }
  return (
    <div>
      <section>
        <button onClick={() => navigate(`/addcourse/${user?.id}`)}>
          Add New Course
        </button>
        {courses.map((course) => (
          <div key={course._id}>
            {user?.id === course.Instructor && (
              <CourseCard
                title={course.name}
                description={course.Description}
                onClick={() => handleCourseClick(course._id)}
              />
            )}
          </div>
        ))}
      </section>
    </div>
  )
}

export default InstructorPage
