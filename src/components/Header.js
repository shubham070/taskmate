import logo from "../assets/logo-white.png";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "./Shop/Context/CartContext";
export default function Header() {
  const {cartList} = useCart();

  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo" />  
      </Link>
      <nav className="navigation">
          <NavLink to = "/" end> Home </NavLink>
          {/* <NavLink to = "/products"> Products </NavLink>
          <NavLink to = "/tasks"> Tasks </NavLink> */}
          <NavLink to = "/counter"> Counter </NavLink>
          <NavLink to = "/shop"> Shop!</NavLink>
          <NavLink to = "/cart">Cart - {cartList.length}</NavLink>
      </nav>
    </header>
  );
}
