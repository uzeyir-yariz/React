/* eslint-disable react/prop-types */
import { useState } from "react";
import { Form } from "./Form";

/*
  burada task formunun componenti bulunmaktadır
  burada edit ve ekleme işlemi yapılacak form tek componentte olacaktır

  // * taskların: ID, title, description, completed, önem sırası olacaktır
  
  // todo: ID: rastgele verielcek yani App.jsx dosyasında verilmesi gerekiyor
  // todo: title: description ve önem sırası form yani Create.jsx içinde verilmesi gerekiyor
  // todo: completed: checkbox olarak verilmesi gerekiyor
  // todo: priority: öncelik sırası 1,2,3,4,5 olarak ayarlanabilir şekilde beş seçenek olacak 

  * form için : 
    // todo: yeni eklenecek task için alan oluşturulması gerekiyor eklenen task App.jsx içinde bir array içine atılacaktır
    // todo: tasklar dizi değişkende obje olarak saklanacaktır
    // todo: örnek data :
      * {
      *   id: 23781,
      *   task_title: "çöpleri çıkar",
      *   task_description: "sabah saat erken saatte çıkar",
      *   completed: false,
      *   priority: 2
      * }
    
    // evet > iki formda gizli olacak Modal şeklide
    // evet > tüm tasklar tek bir array'de yani App.jsx içinde bulunacaktır
    // evet > listeler card şeklinde değil çizgi şeklinde sıralanacaktır
    // evet > sıralamaya göre renkler değişecektir 
    // evet > TÜM ID'LER BİRBİRİNDEN FARKLI OLACAKTIR
*/ 
const CreateTask = ({newTaskSend}) => {

  const [isVisible, setIsVisible] = useState(false)

  const handleShowForm = () => {
    setIsVisible(true);
  }

  const handleCloseModal = () => {
    setIsVisible(false);
  }

  const handleSendTask = (title,description,priority) => {
    newTaskSend(title,description,priority);
  }

  return(
    <div className="p-4">
      <button onClick={handleShowForm} className="button is-primary is-fullwidth"> yeni task ekle</button>

      {
        isVisible && (
          <Form isModalVisible={isVisible} closeModal={handleCloseModal} newTask={handleSendTask} />
        )
      }
    </div>
  );
}

export default CreateTask;