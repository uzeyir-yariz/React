import "bootstrap/dist/css/bootstrap.min.css";
import "./_main.css";
import Header from "./components/Header";
import Form from "./components/Form";
import { useState, useEffect } from "react";
import List from "./components/List";
import Footer from "./components/Footer";

function App() {
  const [Arr, setArr] = useState([]);

  // Uygulama yüklendiğinde localStorage'dan verileri çekme
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setArr(JSON.parse(storedTasks));
    }
  }, []);

  // Görevleri localStorage'a kaydetme
  const saveToLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  // Yeni görev ekleme
  const addTask = (title, desc, id) => {
    const newTask = { title, desc, id };
    const updatedTasks = [...Arr, newTask];
    setArr(updatedTasks);
    saveToLocalStorage(updatedTasks); // localStorage'a kaydet
  };

  // Görev silme
  const handleDelete = (id) => {
    const updatedTasks = Arr.filter((item) => item.id !== id);
    setArr(updatedTasks);
    saveToLocalStorage(updatedTasks); // localStorage'a kaydet
  };

  return (
    <>
      <Header />
      <Form addTask={addTask} />
      <List array={Arr} deleted={handleDelete} />
      <Footer />
    </>
  );
}

export default App;
