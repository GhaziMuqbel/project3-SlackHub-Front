import React from "react"

const CourseCard = ({ onClick, title, description }) => {
  return (
    <div className="assig" onClick={onClick}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default CourseCard
