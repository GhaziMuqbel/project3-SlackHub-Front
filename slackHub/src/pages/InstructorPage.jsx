import CourseCard from "../components/CourseCard"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import CourseAdd from '../components/CourseAdd'
import axios from "axios"

const instructor = ({user}) => {
  const [courses, setCourses] = useState([])
  const navigate = useNavigate()
  
  const handleCourseClick = (courseId) => {
    navigate(`/view/instructorcourse/${courseId}`)
  }

  useEffect(() => {
    const getCourse = async () => {
        const response = await axios.get("http://localhost:3001/course/getcourses")
       
        setCourses(response.data)
      }
      getCourse()
  }, [])
 console.log(`courses on the instructor page ==> ${courses}`)
 console.log(`instructor ID ${user?.id}`);

 
  return (
    <div>
      <section>
      <button onClick={() => navigate("/addcourse", { state: { instructorId: user?.id } })}>Add New Course</button>
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

export default instructor
