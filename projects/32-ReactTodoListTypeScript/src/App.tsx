import { ChangeEvent, useState } from "react";
import "./App.css";
import {TodoListType} from "./proprsType"
import TodoItem from "./TodoItem";

function App() {

  const [task, setTask] = useState<string>("");
  const [deadLine, setDeadLine] = useState<number>(3);
  const [todoList, setTodoList] = useState<TodoListType[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if(event.target.name === "task"){
      setTask(event.target.value)
    } else{
      setDeadLine(Number(event.target.value))
    }
  }

  const handleSubmit = (): void => {
    if(task.trim()){
      const newTask = {
        taskName: task,
        deadLine: deadLine
      }
      setTodoList([...todoList, newTask])
      setTask("");
      setDeadLine(3);
    } else{ alert("lütfen alanı doldurun") }
  }

  const handleDeleteTask = (nameToDelete: string): void => {
    setTodoList(todoList.filter((item) => {
      return item.taskName !== nameToDelete 
    }))
  }

  return (
    <div className="App">
      <div>
        <input value={task} type="text" name="task" onChange={handleChange} />
        <input value={deadLine} type="number" max={30} min={3} name="deadLine" onChange={handleChange} />
        <input type="button" value="ekle" onClick={handleSubmit}/>
      </div>
      <ul>
        {
          todoList.map((item:TodoListType, index) => {
            return <TodoItem key={index} task={item} deleteTask={handleDeleteTask}/>
          })
        }
      </ul>
    </div>
  );
}

export default App;
