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
