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
