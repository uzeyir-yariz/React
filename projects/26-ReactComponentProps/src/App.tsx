import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Home
        name="Arthur"
        lastName="Pack"
        gender={true}
        Class="3. C"
        school="Millennium"
        grade={[100, 70, 90]}
      />
    </div>
  );
}

export default App;
