import { useEffect, useRef } from "react"

const UseRefExample = () => {

  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    inputRef.current?.focus();
  }, [])

  return (
    <div>
      <input type="text" ref={inputRef}/>
    </div>
  )
}

export default UseRefExample
