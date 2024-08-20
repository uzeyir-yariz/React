import "bulma/css/bulma.css"
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0)

  const handleClickAdd = () => {
    setValue(value + 1)
  } 
  
  const handleClickMin = () => { 
    setValue(value - 1)
  } 

  return(
    <div className="has-text-centered">
      <div>
        <button className="m-2 button is-success" onClick={handleClickAdd}>ekle</button>
        <button className="m-2 button is-danger" onClick={handleClickMin}>azalt</button>
      </div>
      
      <h3 className="title">sayı : {value}</h3>
    </div>
  )
}

export default App;
