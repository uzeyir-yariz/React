import "bulma/css/bulma.css"
import { useState } from "react"
import Add from "./components/Add"
import { ListTask } from "./components/ListTask"

function App() {
  const [TaskArr, setTaskArr] = useState([])
  const sortedTasks = [...TaskArr].sort((a, b) => a.priority - b.priority);

  const handleTaskAded = (title,description,priority) => {
    // dipnot burada ki rastgele verilen ID çok küçük ihtimalle aynı çıkablir
    setTaskArr([...TaskArr, {
      id: Math.round(Math.random() * 999999999),
      title,
      description,
      priority,
      complete: false
    }])
  }

  const handleChecked = (complete, ID) => {
    setTaskArr(TaskArr.map(task => {
      if(ID === task.id){
        return {...task, complete: complete};
      }
      return task;
    }))
  }

  return (
    <>
      <Add newTaskSend={handleTaskAded}/>
      <ListTask TaskArrList={sortedTasks} onCheckedSend={handleChecked}/>
    </>
  )
}

export default App
