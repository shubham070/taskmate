import logo from "../assets/logo-white.png";
export default function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <a href="/">Home</a>
    </header>
  );
}
