import "bulma/css/bulma.css";
import { useTransition } from "react";
import { useState } from "react";

function App() {
  const [InputVal, setInputVal] = useState("")
  const [Arr, setArr] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setInputVal(e.target.value)

    startTransition(() => {
      let arr = [];
      for(let i = 0; i < 4000; i++){
        arr[i] = InputVal;
      }
      setArr(arr);
    })
  }

  return (
    <>
    <div className={`control ${isPending ? "is-loading" : ""} `}>
      <input type="text" className="input" onChange={handleChange} value={InputVal} />
    </div>

      <ul>
        {
          Arr.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
    </>
  );
}

export default App;
