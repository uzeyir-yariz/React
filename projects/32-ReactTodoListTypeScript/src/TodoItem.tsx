import {TodoListType} from "./proprsType"

type PropsType = {
  task: TodoListType;
  deleteTask(nameToDelete:string):void
}

const TodoItem = ({task, deleteTask}:PropsType) => {

  return (
    <div>
      <p>{task.taskName} <strong>{task.deadLine}</strong> </p>
      <button onClick={() => deleteTask(task.taskName)}>delete</button>
    </div>
  )
}

export default TodoItem
