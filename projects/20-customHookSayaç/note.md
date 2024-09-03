# note

## App.jsx

```JSX
import "bulma/css/bulma.css";
import Count from "./components/Count";

function App() {
  return (
    <div className="p-4">
      <h1 className="title">sayaç projesi</h1>
      <Count />
    </div>
  );
}

export default App;
```

## Count.jsx

```JSX
import useCounter from "../hooks/useCounter"

const Count = () => {
  
  const [num, increment, reset, decrement] = useCounter();

  return (
    <div>
      <h2 className="subTitle mb-4">Count - {num} </h2>

      <div className="buttons">
        <button onClick={decrement} className="button is-danger">-</button>
        <button onClick={reset} className="button">reset</button>
        <button onClick={increment} className="button is-success">+</button>
      </div>
    </div>
  )
}

export default Count
```

## useCounter.jsx

```JSX
import { useState } from "react"

const useCounter = () => {
  const [num, setNum] = useState(0)

  const increment = () => {
    setNum((prev) => prev + 1)
  } 
  const reset = () => {
    setNum(0)
  } 
  const decrement = () => {
    setNum((prev) => prev - 1)
  } 

  return [num, increment, reset, decrement]
}

export default useCounter
```
