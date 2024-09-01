import "bulma/css/bulma.css";
import { useEffect } from "react";
import { useRef, useState } from "react";

function App() {
  const inputRef = useRef(null);
  const timerRef = useRef(null);
  const [isTypeing, setIsTypeing] = useState(false);
  const [time, setTime] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    if (isTypeing) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(timerRef.current); 
  }, [isTypeing]); 

  const handleStart = () => {
    setIsTypeing(true);
    inputRef.current.focus();
  };

  const handleChange = (e) => {
    setText(e.target.value);
    if (e.target.value === "") {
      setIsTypeing(false);
    }
  };

  const handleReset = () => {
    clearInterval(timerRef.current);
    setIsTypeing(false);
    setTime(0);
    setText("");
  };

  return (
    <>
      <div className="container p-4">
        <h1 className="title">Yazı Yazma Hızını Ölçme Uygulaması</h1>

        <div className="buttons">
          <button onClick={handleStart} className="button">Yazmaya Başla</button>
          <button onClick={handleReset} className="button">Sıfırla</button>
        </div>

        <input
          ref={inputRef}
          type="text"
          className="input disabled"
          value={text}
          onChange={handleChange}
          disabled={!isTypeing} 
        />

        <p>Geçen Süre: {time} saniye</p>
        <p>Girilen Metin: {text}</p>
      </div>
    </>
  );
}

export default App;
