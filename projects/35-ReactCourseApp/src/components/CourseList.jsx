import { useSelector, useDispatch } from "react-redux";
import CourseItem from "./CourseItem";
import { clearCart } from "../control/CartSlice";

const CourseList = () => {
  const { quantity, cartItem, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <>
      {quantity <= 0 ? (
        <section className="text-center">
          <h2>sepetim boş</h2>
          <button
            className="btn btn-primary btn-lg mt-4"
            onClick={() => window.location.reload()}
          >
            sepeti yenile
          </button>
        </section>
      ) : (
        <section>
          <h2 className="text-center display-5 my-4">sepetim</h2>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "100vh" }}
          >
            <div className="row gap-4 container-fluid justify-content-center flex-wrap">
              {cartItem.map((item, index) => {
                return <CourseItem {...item} key={index} />;
              })}
            </div>
          </div>

          <footer className="text-center my-4">
            <hr />
            <p className="display-6">Toplam: {total} TL</p>
            <button
              onClick={() => dispatch(clearCart())}
              className="btn btn-lg btn-danger"
            >
              temizle
            </button>
          </footer>
        </section>
      )}
    </>
  );
};

export default CourseList;
