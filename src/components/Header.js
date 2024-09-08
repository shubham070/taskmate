import logo from "../assets/logo-white.png";
import { Link, NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo" />  
      </Link>
      <nav className="navigation">
          <NavLink to = "/" end> Home </NavLink>
          <NavLink to = "/products"> Products </NavLink>
          <NavLink to = "/tasks"> Tasks </NavLink>
          <NavLink to = "/counter"> Counter </NavLink>
      </nav>
    </header>
  );
}
