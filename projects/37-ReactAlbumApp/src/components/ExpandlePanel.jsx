import { useState } from "react";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";

// eslint-disable-next-line react/prop-types
const ExpandlePanel = ({ header, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container alert alert-primary">
      <div className="d-flex align-items-center alert">
        {header}
        <div className="ms-auto" onClick={handleClick}>
          {isOpen ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
      </div>

      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default ExpandlePanel;
