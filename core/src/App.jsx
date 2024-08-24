import "bulma/css/bulma.css"
import { useEffect, useState } from "react"
import Add from "./components/Add"
import { ListTask } from "./components/ListTask"
import axios from "axios"

function App() {
  const [TaskArr, setTaskArr] = useState([])
  const sortedTasks = [...TaskArr].sort((a, b) => a.priority - b.priority);

  const handleTaskAded = (title,description,priority) => {
    // dipnot burada ki rastgele verilen ID çok küçük ihtimalle aynı çıkablir
    const newTask = {
      id: Math.round(Math.random() * 999999999),
      title,
      description,
      priority,
      complete: false
    }

    setTaskArr([...TaskArr, newTask])
    axios.post("http://localhost:3001/tasks", newTask)
      .then(() => {
        console.log("gönderildi");
      })
      .catch((err) => {
        console.log("hata yakaladık", err)
      })
  }

  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:3001/tasks");
    setTaskArr(response.data);
  }

  useEffect(() => {
    fetchTasks();
  })

  const handleChecked = (complete, ID) => {
    setTaskArr(TaskArr.map(task => {
      if(ID === task.id){
        return {...task, complete: complete};
      }
      return task;
    }))
  }

  const handleDelete = async (id) => {
    console.log(`http://localhost:3001/tasks/${id}`);
    await axios.delete(`http://localhost:3001/tasks/${id}`);
    setTaskArr(TaskArr.filter(task => {
      return task.id !== id;
    }))
  }

  return (
    <>
      <Add newTaskSend={handleTaskAded}/>
      <ListTask TaskArrList={sortedTasks} onCheckedSend={handleChecked} onDeleteSend={handleDelete}/>
    </>
  )
}

export default App
