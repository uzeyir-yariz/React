import { useState } from "react";
import { Form } from "./Form";
// eslint-disable-next-line react/prop-types
export const TaskItem = ({ title, description, priority, complete, ID, onChecked, onDelete}) => {
  const [isComplete, setIsComplete] = useState(complete);
  const [isEdit, setIsEdit] = useState(false)
  const checkboxId  = `cbx-${ID}`

  const handleCheck = () => {
    onChecked(!isComplete, ID);
    setIsComplete(!isComplete)
  }

  const handleDelete = () => {
    onDelete(ID);
  }

  const handleEditChange = () => {
    setIsEdit(true);
  }

  const handleCloseModal = () => {
    setIsEdit(false);
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

      <div className="task-content">
        <strong className="task-title">
          {title}
          <span className="custom-task-button">
            <button onClick={handleEditChange} className="button mx-2 is-link is-normal">düzenle</button>
            <button onClick={handleDelete} className="button mx-2 is-danger is-normal">sil</button>
          </span>
        </strong>

        <p className="description">{description}</p>
      </div>
      {
        isEdit ? <>
          <Form isModalVisible={isEdit} closeModal={handleCloseModal} isEdit={isEdit} sendId={ID} />
        </> 
        :
        null
      }
    </a>
  );
};
