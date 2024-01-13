import Nav from "./Nav";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="little lemon" />
      </Link>
      <Nav />
    </header>
  );
}
