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

  const handleDeleteCourse = (id) => {
    const deletedArr = coursesArr.filter((course) => course.id !== id);
    setCoursesArr(deletedArr);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <>
      {!isLoading ? (
        <>
          {coursesArr.length === 0 ? (
            <div className="hero is-danger has-text-centered">
              <div className="hero-body">
                <h1 className="title">başka kurs kalmadı</h1>
                <h2 className="subtitle">kursları tazeleyin</h2>
                <button className="button is-primary" onClick={() => {fetchCourses();}}>yenile</button>
              </div>
            </div>
          ) : (
            <Courses
              courses={coursesArr}
              sendDeleteCourse={handleDeleteCourse}
            />
          )}
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default App;
