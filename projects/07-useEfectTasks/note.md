# note

> proje çalışan versiyonu aşağıda verilmiştir

---

## App.jsx

```jsx
import "bulma/css/bulma.css"
import { CreateTask } from "./components/CreateTask"
import { ListTasks } from "./components/ListTasks"
import { useState } from "react"

function App() {
  const [TasksArr, setTasksArr] = useState([])

  const handleAdedTask = (title, desc) => {
    setTasksArr([...TasksArr, {
      id: Math.round(Math.random() * 999999),
      title,
      desc,
    }]);
  }

  const handleDeleted = (id) => {
    setTasksArr(TasksArr.filter((task) => task.id !== id))
  }

  const handleUpdate = (id, updatedTitle, updatedDesc) => {
    const updateArr = TasksArr.map((task) => {
      if(task.id === id){
        console.log(updatedTitle)
        return {
          id,
          title: updatedTitle,
          desc: updatedDesc,
        }
      } else{
        return task;

      }
    })
    setTasksArr(updateArr);
  }

  console.log(TasksArr);

  return (
    <>
      <h1 className="title has-text-centered p-4">Create Task</h1>

      <CreateTask adedTask={handleAdedTask}/>
      
      <h2 className="title has-text-centered p-4">görevler</h2>
      
      <ListTasks tasks={TasksArr} onDeleteID={handleDeleted} onUpdate={handleUpdate} />
    </>
  )
}

export default App
```

## createTask.jsx

```jsx
/* eslint-disable react/prop-types */
import { useState } from "react";

export const CreateTask = ({adedTask, TaskUpdateForm, Task, onUpdate}) => {

  const [TaskTitle, setTaskTitle] = useState(Task ? Task.title : "")
  const [TaskDesc, setTaskDesc] = useState(Task ? Task.desc : "")

  const handleSubmitForm = (event) => {
    event.preventDefault();

    if(TaskTitle.trim() && TaskDesc.trim()){

      if(TaskUpdateForm){
        onUpdate(Task.id, TaskTitle, TaskDesc);
        console.log(Task.id, Task.title, Task.desc)
      } else{
        adedTask(TaskTitle, TaskDesc)
      }

      setTaskTitle("");
      setTaskDesc("");
    } else{ alert("lütfen tüm alanları doldurun") }
  }

  return (
    <div>
      {
        TaskUpdateForm ?  
          <form className="container" onSubmit={handleSubmitForm}>
            <div className="field">
              <label className="label">görevin başlığını güncelleyin</label>
              <div className="control">
                <input value={TaskTitle} onChange={(e) => setTaskTitle(e.target.value)} className="input" type="text" placeholder="task başlığı güncelle" />
              </div>
            </div>
            <div className="field">
              <label className="label">görevin detaylarını güncelleyin </label>
              <div className="">
                <textarea  value={TaskDesc} onChange={(e) => setTaskDesc(e.target.value)} className="textarea" placeholder="task detaylarını güncelle"></textarea>
              </div>
            </div>
            <button className="button is-link is-fullwidth">güncelle</button>
          </form>
          
          :

          <form className="container" onSubmit={handleSubmitForm}>
            <div className="field">
              <label className="label">task başlığı</label>
              <div className="control">
                <input value={TaskTitle} onChange={(e) => setTaskTitle(e.target.value)} className="input" type="text" placeholder="task başlığı giriniz" />
              </div>
            </div>
            <div className="field">
              <label className="label">task detayı</label>
              <div className="">
                <textarea  value={TaskDesc} onChange={(e) => setTaskDesc(e.target.value)} className="textarea" placeholder="task detaylarını yazınız"></textarea>
              </div>
            </div>
            <button className="button is-primary is-fullwidth">oluştur</button>
          </form>
      }
    </div>
  )
}
```

## ListTask.jsx

```jsx
/* eslint-disable react/prop-types */
import Task from "./Task";

export const ListTasks = ({ tasks, onDeleteID, onUpdate }) => {
  const handleDeleted = (id) => {
    onDeleteID(id);
  };

  return (
    <div className="conatiner-tasks">
      {tasks.map((task, index) => {
        return (
          <Task
            taskName={task}
            title={task.title}
            desc={task.desc}
            id={task.id}
            key={index}
            onDeleted={handleDeleted}
            onUpdate={onUpdate}
          />
        );
      })}
    </div>
  );
};
```

## Task.jsx

```jsx
import { useState } from "react"
import { CreateTask } from "./CreateTask";

/* eslint-disable react/prop-types */
const Task = ({title, desc, id, onDeleted, taskName, onUpdate}) => {
  const [Show, setShow] = useState(false);
  const [IsEdit, setIsEdit] = useState(false)

  const handleShowFooter = () => {
    setShow(!Show);
  }

  const handleDelete = () => {
    onDeleted(id)
  }

  const handleEdit = () => {
    setIsEdit(true);
  }

  const handleSubmit = (ID, updatedTitle, updatedDesc) => {
    setIsEdit(false);
    console.log(ID, updatedTitle, updatedDesc)
    onUpdate(ID, updatedTitle, updatedDesc)
  }

  return (
    <div>
      {
        !IsEdit ?(
          <div id={id} className="card p-4 custom-card-width" onClick={handleShowFooter}>
            <div className="card-header">
              <h3 className="title"> {title} </h3>
            </div>
            <div className="card-body">
              <p className="p-4"> {desc} </p>
            </div>

            {
              Show && (
              <div className="card-footer">
                <button onClick={handleDelete} className="button m-2 is-danger is-fullwidth">sil</button>
                <button onClick={handleEdit} className="button m-2 is-link is-fullwidth">güncelle</button>
              </div>
              )
            }
          </div>
        ) : (
          <div className="card p-4 custom-card-width">
            <CreateTask TaskUpdateForm={IsEdit} onUpdate={handleSubmit} Task={taskName} />
          </div>
        )
      }
    </div>
  )
}

export default Task
```