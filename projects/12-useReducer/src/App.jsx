import "bulma/css/bulma.css";
import { useReducer } from "react";

const initalValue = 0;

const reducer = ((state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return initalValue;
    default:
      return state;
  }
}) 

function App() {
  const [state, dispatch] = useReducer(reducer, initalValue)

  return (
    <div className="hero is-link has-text-centered">
      <div className="hero-body">
        <h1 className="title">Count : {state}</h1>
        <div className="gap-4 mt-4 grid">
          <button className="button is-danger" onClick={() => {dispatch({type : "DECREMENT"})}}>-</button>
          <button className="button" onClick={() => {dispatch({type : "RESET"})}}>0</button>
          <button className="button is-primary" onClick={() => {dispatch({type : "INCREMENT"})}}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;

/* 
! bir hata yaptım 

### açıklaması:

* - **`dispatch({ type: "INCREMENT" })`**: `dispatch` fonksiyonuna bir nesne (`{ type: "INCREMENT" }`) gönderiyoruz. Bu nesne `reducer` fonksiyonuna `action` olarak iletilir.
* - **Başlangıç değeri (`initialValue`)**: `useReducer` fonksiyonunda `initialValue`'yi ikinci argüman olarak geçiriyoruz (`useReducer(reducer, initialValue)`), böylece `count` başlangıçta `0` olarak ayarlanır.

Bu şekilde, `dispatch` fonksiyonuyla `action` türünü doğru bir şekilde geçirecek ve `reducer` fonksiyonundaki ilgili durumu güncelleyebileceksiniz.
*/ 