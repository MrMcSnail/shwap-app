import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to="/categories"><h2>Categories</ h2></Link>
            <Link to="/users"><h2>Users</ h2></Link>
            <Link to="/sell"><h2>Sell Item</h2></Link>
            <Link to="/createuser"><h2>Create Userprofile</h2></Link>
            <Link to="/basket"><h2>Basket</h2></Link>
        </nav>
    )
}

export default NavBar;