# note

```JSX
import "bulma/css/bulma.css"
import { Course } from "./Course"
import { useState } from "react"

function get_random_course(){
  const coursesArr = [
    "image_1",
    "image_2",
    "image_3",
    "image_4",
    "image_5"
  ]
  return coursesArr[Math.floor(Math.random() * coursesArr.length)]
}

function App() {
  const [course, setCourse] = useState([])

  const handleClick = () => {
    setCourse([...course, get_random_course()])
  }

  return (
    <div className="container p-4">
      <div className="has-text-centered">
        <button onClick={handleClick} className="button is-primary">Resim Ekle</button>
      </div>

      {
        course.map((item, index) => {
          return <Course key={index} courseName={item}/>
        })  
      }
    </div>
  )
}

export default App

```