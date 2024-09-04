import { useNavigate } from "react-router-dom"

const Contact = () => {

  const navigate = useNavigate();

  return (
    <div>
      <h2 className="subtitle">contact</h2>
      <button onClick={() => navigate("/about")} className="button">about us</button>
    </div>
  )
}

export default Contact
