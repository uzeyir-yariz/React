import Course from "./course";

/* eslint-disable react/prop-types */
const Courses = ({ courses, sendDeleteCourse }) => {
  console.log(courses);
  return (
    <div>
      <div className="hero is-link has-text-centered">
        <div className="hero-body">
          <h1 className="title">courses</h1>
        </div>
      </div>

      <div className="custom-flex">
        {
          courses.map((course) => {
            return (
              <Course {...course} key={course.id} deleteCourse={(id) => {sendDeleteCourse(id)}} />
            )
          })
        }
      </div>
    </div>
  );
};

export default Courses;
