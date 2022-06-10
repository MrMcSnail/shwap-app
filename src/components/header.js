import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="Header">
            <title>Shwap - Your Online Marketplace</title>
            <Link to='/items'><h1>Shwap</h1></Link>
        </header>
    )
}

export default Header