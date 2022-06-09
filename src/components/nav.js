import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to="/categories"><h2>Categories</ h2></Link>
        </nav>
    )
}

export default NavBar;