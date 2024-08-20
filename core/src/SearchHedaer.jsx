/* eslint-disable react/prop-types */
import { useState } from "react"

export const SearchHedaer = ({search}) => {
  const [valueInput, setValueInput] = useState("")

  const handleSubmitForm = (e) => {
    e.preventDefault()
    search(valueInput)
  }

  const handleChange = (event) => {
    setValueInput(event.target.value); 
  }

  return (
    <div className="hero is-small is-primary">
      <form className="hero-body" onSubmit={handleSubmitForm}>
        <h1 className="title">ne arıyorsunuz ?</h1>
        <input type="text" value={valueInput} onChange={handleChange} className="input" placeholder="ne arıyorsunuz ?" />
      </form>
    </div>
  )
}
