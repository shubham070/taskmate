import logo from "../assets/logo-white.png";
import { Link, NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo" />  
      </Link>
      <nav className="navigation">
          <Link to = "/"> Home </Link>
          <Link to = "/products"> Products </Link>
          <Link to = "/tasks"> Tasks </Link>
          <Link to = "/counter"> Counter </Link>
      </nav>
    </header>
  );
}
