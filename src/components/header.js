import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/user';
import { useContext } from 'react';

const Header = () => {
    const {user} = useContext(UserContext)
    return (
        <header className="Header">
            <title>Shwap - Your Online Marketplace</title>
            <Link to='/items'><h1>Shwap</h1></Link>
            <p className='current-user'>Welcome {user.username}</p>
        </header>
    )
}

export default Header