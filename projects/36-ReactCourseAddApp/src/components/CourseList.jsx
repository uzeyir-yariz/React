import { useSelector, useDispatch } from "react-redux";
import { removeCourse } from "../store/slices/CourseSlice";

const CourseList = () => {
  const dispatch = useDispatch();
  const {courses} = useSelector(({ courses: { data, searchTerm } }) => {
    const filteredCourses = data.filter((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return{
      courses: filteredCourses
    }
  });

  const renderedCourse = () => {
    return courses.map((item) => {
      return (
        <div className="card my-4 w-25" key={item.id}>
          <div className="card-header">
            <h2 className="card-title">{item.name}</h2>
          </div>
          <div className="card-body">
            <div className="card-text">
              <p> {item.desc} </p>
            </div>
            <span className="fw-bold " style={{ fontSize: "20px" }}>
              {item.cost} TL
            </span>
          </div>
          <div className="card-fotter">
            <button
              className="w-100 btn btn-danger"
              onClick={() => dispatch(removeCourse(item.id))}
            >
              sil
            </button>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="d-flex gap-4 justify-content-center flex-wrap">
      {renderedCourse()}
    </div>
  );
};

export default CourseList;
