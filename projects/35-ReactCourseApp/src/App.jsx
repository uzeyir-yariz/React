import { useEffect } from "react"
import "./App.css"
import CourseList from "./components/CourseList"
import Nav from "./components/Nav"
import {calculate} from "./control/CartSlice"
import { useSelector, useDispatch } from "react-redux"

function App() {
  const {cartItem} = useSelector((store) => store.cart)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculate());
  },[cartItem])

  return (
    <>
      <Nav/>
      <CourseList/>
    </>
  )
}

export default App
