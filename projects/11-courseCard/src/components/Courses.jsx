import { useState } from "react";
import { FaChevronLeft, FaChevronRight  } from "react-icons/fa"

/* eslint-disable react/prop-types */
const Courses = ({ courses }) => {
  const courseLength = courses.length;
  const [index, setIndex] = useState(Math.floor(Math.random() * courseLength))
  const { id, content, price, title } = courses[index];

  console.log(courseLength)

  const handleNext = () => {
    if(index < courseLength - 1){
      setIndex(index + 1)
    } else{setIndex(0)}
  }
  
  const handlePrev = () => {
    if(index > 0){
      setIndex(index - 1)
    } else {setIndex(courseLength - 1)}
  }

  const handleRandomCourse = () => {
    setIndex(Math.floor(Math.random() * courseLength))
  }

  return (
    <div>
      <div className="hero is-link has-text-centered">
        <div className="hero-body">
          <h1 className="title">courses</h1>
          <button className="button" onClick={handleRandomCourse}>rastgele kurs</button>
        </div>
      </div>

      <div className="custom-flex">
        <button onClick={handlePrev} className="has-text-info"><FaChevronLeft/></button>
        <div className="card" id={id}>
          <div className="card-content">
            <p className="title">{title}</p>
          </div>

          <div className="card-content">
            <p className="content">{content}</p>
            <a href="#">{price} </a>
          </div>
        </div>
        <button onClick={handleNext} className="has-text-info"><FaChevronRight/></button>
      </div>
    </div>
  );
};

export default Courses;
