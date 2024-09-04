import { useNavigate } from "react-router-dom"

const About = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="subtitle">about</h2>
      <button onClick={() => navigate("/contact")} className="button">contact us</button>
    </div>
  )
}

export default About
