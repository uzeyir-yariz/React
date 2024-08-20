/* eslint-disable react/prop-types */
import { useState } from "react";
export const Search = ({SearchValue}) => {
  const [InputValue, setInputValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    SearchValue(InputValue);
  }

  const handleChaneg = (e) => setInputValue(e.target.value);

  return (
    <div className="hero is-link is-small">
      <form className="hero-body" onSubmit={handleSubmit}>
        <input value={InputValue} onChange={handleChaneg} className="input" type="text" placeholder="ne aradınız ?"/>
      </form>
    </div>
  )
}
