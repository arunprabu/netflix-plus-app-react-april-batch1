import { NavLink } from 'react-router-dom';

// create MenuList/MenuItem comp

// Functional Component with Arrow Function
const MenuList = () => {
  // keep the menus array of object with path, title, id
  // in place of li render MenuItem 4 or 5 times with key being unique

  return (
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      <li className="nav-item">
        <NavLink className="nav-link" aria-current="page" to="/">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/hoc-demo">
          HOC Demo
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about-us">
          About Us
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact-us">
          Contact Us
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/hooks-demo">
          Hooks Demo
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/shop">
          Shop
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/unit-testing-demo">
          Unit Testing Demo
        </NavLink>
      </li>
    </ul>
  );
};

export default MenuList;
