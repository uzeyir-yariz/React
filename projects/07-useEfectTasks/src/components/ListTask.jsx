/* eslint-disable react/prop-types */
import { TaskItem } from "./TaskItem";
import { useState } from "react";

export const ListTask = ({ TaskArrList, onCheckedSend, onDeleteSend }) => {
  const [searchTerm, setSearchTerm] = useState(""); 
  const [filter, setFilter] = useState(null); 

  const handleChecked = (complete, ID) => {
    onCheckedSend(complete, ID);
  };

  const filteredTasks = () => {
    let tasks = [...TaskArrList];

    if (filter !== null) {
      tasks = tasks.filter(task => task.complete === filter);
    }

    if (searchTerm) {
      tasks = tasks.filter(task =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return tasks;
  };

  const handleDelete = (ID) => {
    onDeleteSend(ID)
  }

  return (
    <article className="panel is-primary m-4">
      <p className="panel-heading">Tasks</p>
      <div className="panel-block">
        <p className="control has-icons-left">
          <input
            className="input"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="icon is-left">
            <i className="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
      </div>

      {/* Filtreleme butonları */}
      <div className="panel-block">
        <button className="button mx-2" onClick={() => setFilter(null)}>Tüm Görevler</button>
        <button className="button mx-2" onClick={() => setFilter(true)}>Tamamlananlar</button>
        <button className="button mx-2" onClick={() => setFilter(false)}>Tamamlanmayanlar</button>
      </div>

      {/* Filtrelenmiş görevler buradan başlıyor */}
      {
        filteredTasks().map((item) => (
          <TaskItem 
            ID={item.id}
            title={item.title} 
            description={item.description} 
            priority={item.priority} 
            complete={item.complete} 
            key={item.id}
            onChecked={handleChecked}
            onDelete={handleDelete}
          />
        ))
      }
    </article>
  );
};
