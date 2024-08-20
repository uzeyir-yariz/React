import "bulma/css/bulma.css" // bulma css classları için
import { useState } from "react"
import { Course } from "./Course"

function get_random_images(){
  const images = [
    "image_1",
    "image_2",
    "image_3",
    "image_4",
    "image_5"
  ]

  return images[Math.floor(Math.random() * images.length)] // rastgele images seçip göndermek için kullandığım kod
}

function App() {
  const [img, setImg] = useState([]) // boş bir tutucu oluşturdum

  const handleClick = () => {
    setImg([...img, get_random_images()]) // ...img, bu kod diğer sonrakine ekleme yapmakta yani şöyle {demo.textContent += "test"} bu şekilde mantığı var
  }

  const courses = img.map((item, index) => { // burada courses adlı dizi değişkende dolaşma komutu kullandım ve galary adlı sınıfın içine atadım
    return <Course courseName={item} key={index}/>
  })

  return (
    <>
    <div className="container p-4">
      <div className="has-text-centered">
        <button onClick={handleClick} className="button is-primary">resim ekle</button>
      </div>
      <div  className="galary">
        {courses}
      </div>
    </div>
    </>
  )
}

export default App
