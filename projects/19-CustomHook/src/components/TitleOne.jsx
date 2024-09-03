import { useState } from "react";
import useTitle from "../hooks/useTitle";

const TitleOne = () => {

  const [Count, setCount] = useState(0)

  useTitle(Count);

  return (
  <input 
    type="button" 
    value={`count - ${Count} `} 
    className="button" 
    onClick={() => setCount(Count + 1)}/>
  );
};

export default TitleOne;
