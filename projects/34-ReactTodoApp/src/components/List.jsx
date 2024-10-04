/* eslint-disable react/prop-types */
import { useState } from "react";
import Task from "./Task";

const List = ({ array, deleted }) => {
  const [search, setSearch] = useState("");

  const handleDelete = (id) => {
    deleted(id);
  };

  const filteredArray = array.filter((item) => {
    return (
      item.title.toLowerCase().includes(search.toLowerCase()) || // Başlığa göre arama
      item.desc.toLowerCase().includes(search.toLowerCase()) // Açıklamaya göre arama
    );
  });

  return (
    <div className="container mt-4">
      <input
        type="text"
        className="form-control"
        placeholder="görev araması..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="list-group mt-4">
        {filteredArray.length > 0 ? (
          filteredArray.map((item) => {
            return (
              <Task
                {...item}
                key={item.id}
                ondelete={() => handleDelete(item.id)}
              />
            );
          })
        ) : (
          <div className="text-light display-3 text-center fst-italic fw-light">Görev yok</div>
        )}
      </div>
    </div>
  );
};

export default List;
