import { useState } from "react";

const EventActions = () => {

  const [val, setVal] = useState("");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    setVal("")
  };

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setVal(event.target.value);
  }

  return (
    <div>
      <button onClick={(e) => handleClick(e, 1)}>push me!</button>
      <input type="text" value={val} onChange={handleChange}/>
      <p> burada yazı : <strong>{val}</strong> </p>
    </div>
  );
};

export default EventActions;
