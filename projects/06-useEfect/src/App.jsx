import "bulma/css/bulma.css"
import { useState, useEffect } from "react"

function App() {

  const [uzeyir, setuzeyir] = useState(0)
  const [yariz, setyariz] = useState(0)

  useEffect(() => {
    console.log("her zaman render edildiğinde çalışır")
  })

  useEffect(() => {
    console.log("ilk başta render edildiğinde çalışır sonra çalışmaz")
  },[])

  useEffect(() => {
    console.log("ilk başta render edildiğinde çalışır uzeyir güncellenir ise çalışır")
  },[uzeyir])

  useEffect(() => {
    console.log("ilk başta render edildiğinde çalışır yariz güncellenir ise çalışır")
  },[yariz])

  useEffect(() => {
    console.log("ilk başta render edildiğinde çalışır uzeyir yada yariz güncellenir ise çalışır")
  },[uzeyir, yariz])

  return (
    <>
      <div className="container columns has-text-centered">
        <div className="column">
          <button onClick={() => setuzeyir(uzeyir + 1)} className="button">üzeyir</button>
          <p>{uzeyir}</p>
        </div>

        <div className="column">
          <button onClick={() => setyariz(yariz + 1)} className="button">yarız</button>
          <p>{yariz}</p>
        </div>
      </div>
    </>
  )
}

export default App
