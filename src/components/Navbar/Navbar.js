import "./Navbar.scss";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import { useLoginContext } from "../../context/LoginContext";
import logo from "../Navbar/logo.png";

export const Navbar = ({ bg = "#78ccb0" }) => {
    const { user, logout } = useLoginContext();

    return (
        <header className="header">
            <div className="header__container">
                <nav className="header__nav">
                    <Link className="header__link" to="/">
                        <img src={logo} alt="" width="80" height="80" />
                    </Link>
                    <Link className="header__link" to="/productos/cajas">
                        Cajas
                    </Link>
                    <Link className="header__link" to="/productos/bolsas">
                        Bolsas
                    </Link>
                    <Link className="header__link" to="/productos/guantes">
                        Guantes
                    </Link>
                    <Link className="header__link" to="/productos/Papel">
                        Papel
                    </Link>
                    <CartWidget />
                </nav>
            </div>
        </header>
    );
};
