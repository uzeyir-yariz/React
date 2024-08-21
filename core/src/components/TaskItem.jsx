import { useState } from "react";
// eslint-disable-next-line react/prop-types
export const TaskItem = ({ title, description, priority, complete, ID, onChecked}) => {
  const [isComplete, setIsComplete] = useState(complete);
  const checkboxId  = `cbx-${ID}`

  const handleCheck = () => {
    onChecked(!isComplete, ID);
    setIsComplete(!isComplete)
  }

  return (
    <a className={`panel-block ${complete ? "is-checked" : ""}`} id={priority}>
      <div className="checkbox-wrapper-46 mr-4">
        <input className="inp-cbx" id={checkboxId} type="checkbox" onChange={handleCheck} checked={isComplete}/>
        <label className="cbx"  htmlFor={checkboxId}>
          <span>
            <svg width="12px" height="10px">
              <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
            </svg>
          </span>
        </label>
      </div>

      {/* <input className="checkbox" type="checkbox" onChange={() => {setIsComplete(!isComplete)}} checked={isComplete} /> */}

      <div>
        <strong>{title}</strong>

        <p className="description">{description}</p>
      </div>
    </a>
  );
};
