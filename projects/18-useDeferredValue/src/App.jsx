import "bulma/css/bulma.css";
import { useState } from "react";
import List from "./components/List";

function App() {
  const [InputValue, setInputValue] = useState()

  const handleChange = (e) => {
    setInputValue(e.target.value);
  } 

  return (
    <>
      <div className="control p-4">
        <input type="text" className="input" onChange={handleChange} />
      </div>

      <div className="p-4">
        <List  inputValue={InputValue}/>
      </div>
    </>
  );
}

export default App;
