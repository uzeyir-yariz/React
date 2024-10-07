/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../control/CartSlice";

const CourseItem = ({ id, title, price, img_src, img_alt, quantity, desc }) => {
  const dispatch = useDispatch();

  const handleDecrease = () => {
    if (quantity === 1) {
      dispatch(removeItem(id));
    } else {
      dispatch(decrease(id));
    }
  };

  return (
    <div
      className="card col-lg-3"
      style={{ padding: "0", width: "20rem" }}
      key={id}
    >
      <img
        src={img_src}
        style={{ height: "300px" }}
        className="card-img-top"
        alt={img_alt}
      />
      <div className="card-header">
        <h4 className="card-title"> {title} </h4>
      </div>

      <div className="card-body">
        <p className="card-text line-clamp"> {desc} </p>

        <div className="row" style={{fontSize: "25px"}}>
          <div className="w-50 text-center fw-bold" > {price} TL </div>
          <div className="w-50 text-center fw-bold text-dark-emphasis">
            {quantity}
          </div>
        </div>
      </div>

      <div className="card-footer">
        <div className="btn-group flex w-100">
          <button className="btn btn-danger" onClick={handleDecrease}>
            -
          </button>
          <button
            onClick={() => dispatch(increase(id))}
            className="btn btn-success"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
