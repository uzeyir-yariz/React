/* eslint-disable react/prop-types */
const Course = ({ id, title, content, price, deleteCourse }) => {
  return (
    <div className="card" id={id}>
      <div className="card-content">
        <p className="title">{title}</p>
      </div>
      
      <div className="card-content">
        <p className="content">{content}</p>
        <a href="#">{price} </a>
      </div>

      <footer className="card-footer">
        <div className="is-fullwidth button" onClick={() => {deleteCourse(id)}}>
          <button className="is-fullwidth button is-danger">sil</button>
        </div>
      </footer>
    </div>
  );
};

export default Course;
