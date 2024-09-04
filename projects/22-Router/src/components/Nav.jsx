import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <aside className="menu">
      <ul className="menu-list">
        <li><NavLink to="/"> Home </NavLink></li>
        <li><NavLink to="/about"> About </NavLink></li>
        <li><NavLink to="/contact"> Contact </NavLink></li>
        <li><NavLink to="/users"> Users </NavLink></li>
        <li><NavLink to="/data"> Data </NavLink></li>
      </ul>
    </aside>
  );
};

export default Nav;
