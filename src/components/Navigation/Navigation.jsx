import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/register">
        Register
      </NavLink>
      <NavLink to="/login">
        Login
      </NavLink>
      <NavLink to="/contacts">
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;