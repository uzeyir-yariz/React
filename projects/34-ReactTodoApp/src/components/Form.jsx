import { useState, useEffect, useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
// eslint-disable-next-line react/prop-types
const Form = ({ addTask }) => {
  const formRef = useRef();
  const inputRef = useRef();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim()) {
      const id = Math.floor(Math.random() * 999999);
      addTask(title, desc, id);
      setIsOpen(false);
      setTitle("");
      setDesc("");
    } else {
      alert("Lütfen başlık ekleyin");
    }
  };

  useEffect(() => {
    const handleEvent = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      if (event.key === "Escape") {
        setIsOpen(false); // ESC tuşu
      }
      if (event.ctrlKey && event.key === "m") {
        setIsOpen(true);
        inputRef.current.focus();
      }
      if (event.ctrlKey && event.key === "Enter") {
        handleSubmit(event);
      }
      if (event.ctrlKey && event.key === "i") {
        alert(`
          ESC > görev pencersini kapat
          ctrl + m > görev penceresini aç
          ctrl + enter > yeni görev ekle
          ctrl + i > yardım

        `);
      }
    };

    document.addEventListener("mousedown", handleEvent);
    document.addEventListener("keydown", handleEvent);

    return () => {
      document.removeEventListener("mousedown", handleEvent);
      document.removeEventListener("keydown", handleEvent);
    };
  }, [formRef, handleSubmit]);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="position-absolute top-0 btn btn-primary m-4"
      >
        <MenuIcon />
      </button>

      <div className={`aside ${isOpen ? "aside-open" : "aside-close"} `}>
        <button
          onClick={() => setIsOpen(false)}
          className="position-absolute bottom-0 btn btn-danger m-4 z-3"
        >
          <CloseIcon />
        </button>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="container card p-4 bg-transparent text-light"
        >
          <h2 className="display-6 text-center mb-4">Görev Ekle</h2>

          <input
            type="text"
            className="form-control mb-4"
            name="title"
            ref={inputRef}
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="başlık"
          />

          <textarea
            name="description"
            placeholder="görev detayı"
            className="form-control mb-4"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>

          <input type="submit" value="submit" className="btn btn-primary" />
        </form>
      </div>
    </div>
  );
};

export default Form;
