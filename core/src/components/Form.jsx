import { useState } from "react";

/* eslint-disable react/prop-types */
export const Form = ({isModalVisible, closeModal, newTask}) => {
  const [titleValue, setTitleValue] = useState("")
  const [descriptionValue, setDescriptionValue] = useState("")
  const [priorityValue, setPriorityValue] = useState("3")

  const handleCloseModal = () => {
    closeModal();
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if(titleValue.trim()){
      newTask(titleValue, descriptionValue, priorityValue);
      
      setTitleValue("");
      setDescriptionValue("");
      setPriorityValue("");
      closeModal();
    } else{alert("lütfen tüm alanları doldurun")}

  }

  return (
    <div className={`modal ${isModalVisible ? "is-active" : ""}`} >
      <div className="modal-background" onClick={handleCloseModal}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <h3 className="modal-card-title">yeni görev ekle</h3>
        </header>

        <section className="modal-card-body">
          <form onSubmit={handleSubmitForm}>

            <div className="field">
              <label className="label">görev başlığı</label>
              <div className="control">
                <input maxLength={25} value={titleValue} onChange={(e) => setTitleValue(e.target.value)} className="input" type="text" placeholder="görev başlığını giriniz..." />
              </div>
            </div>

            <div className="field">
              <label className="label">görev detayları</label>
              <div className="control">
                <textarea value={descriptionValue} maxLength={125} onChange={(e) => setDescriptionValue(e.target.value)} className="textarea" placeholder="görev detaylarını giriniz..."></textarea>
              </div>
            </div>

            <div className="field">
              <label className="label">öncelik</label>
              <div className="control">
                <div className="select is-fullwidth">
                  <select value={priorityValue} onChange={(e) => setPriorityValue(e.target.value)}>
                    <option value="1">çok önemli</option>
                    <option value="2">önemli</option>
                    <option value="3">normal</option>
                    <option value="4">az öncelikli</option>
                    <option value="5">çok az öncelikli</option>
                  </select>
                </div>
              </div>
            </div>

          </form>
        </section>

        <footer className="modal-card-foot">
          <div className="buttons">
            <button className="button is-success" onClick={handleSubmitForm}>görevi ekle</button>
            <button className="button is-danger" onClick={handleCloseModal}>iptal et</button>
          </div>
        </footer>
      </div>
      <button onClick={handleCloseModal} className="modal-close is-large" aria-label="close"></button>
    </div>
  );
};
