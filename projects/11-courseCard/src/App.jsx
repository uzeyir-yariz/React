import "bulma/css/bulma.css";
import Courses from "./components/courses";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./components/Loading";

function App() {
  const [coursesArr, setCoursesArr] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCourses = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("http://localhost:3001/courses");
      setCoursesArr(res.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(true);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <>
      {!isLoading ? (
            <Courses courses={coursesArr}/>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default App;
