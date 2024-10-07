import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useSelector } from "react-redux";

const Nav = () => {
  const { quantity } = useSelector((store) => store.cart);

  return (
    <nav className="alert alert-primary">
      <div className="row align-items-center mx-4">
        <h3 className="col text-start">kurs uygulaması</h3>
        <div className="col text-end">
          <div className="btn btn-primary position-relative">
            <ShoppingBasketIcon />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {quantity}
              <span className="visually-hidden">unread messages</span>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
