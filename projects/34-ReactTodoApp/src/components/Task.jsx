import { useState } from "react";

/* eslint-disable react/prop-types */
const Task = ({ title, ondelete, desc, id }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleDelete = () => {
    ondelete(id);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`list-group-item list-group-item list-group-item-action text-light ${
        isHovered ? "bg-danger" : "bg-dark"
      }`}
      role="button"
      onClick={handleDelete}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h4> {title} </h4>
      {isHovered && <p>{desc}</p>}
    </div>
  );
};

export default Task;
