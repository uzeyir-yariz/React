import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeName, changeDesc, changeCost } from "../store/slices/FormSlice";
import { addCourse } from "../store/slices/CourseSlice";

const CourseForm = () => {
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch();
  const { name, desc, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      desc: state.form.desc,
      cost: state.form.cost,
    };
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCourse({ name, desc, cost }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-dark p-4 mt-4 rounded text-light"
    >
      {isShow ? (
        <div className="d-grid gap-4">
          <div>
            <label>kurs ismi</label>
            <input
              type="text"
              className="form-control"
              onChange={(event) => dispatch(changeName(event.target.value))}
              value={name}
            />
          </div>

          <div>
            <label>kurs açıklaması</label>
            <textarea
              className="form-control"
              onChange={(event) => dispatch(changeDesc(event.target.value))}
              value={desc}
            ></textarea>
          </div>

          <div>
            <label>kurs fiyatı</label>
            <input
              type="number"
              min={0}
              max={1000}
              className="form-control"
              onChange={(event) =>
                dispatch(changeCost(parseInt(event.target.value)))
              }
              value={cost}
            />
          </div>

          <div className="btn-group">
            <button onClick={handleSubmit} className="btn btn-primary">
              ekle
            </button>

            <button className="btn btn-danger" onClick={() => setIsShow(false)}>
              iptal
            </button>
          </div>
        </div>
      ) : (
        <button
          className="w-100 btn btn-primary"
          onClick={() => setIsShow(true)}
        >
          kurs ekle
        </button>
      )}
    </form>
  );
};

export default CourseForm;
