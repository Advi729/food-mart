import { useState } from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
     return (
        <div className='header'>
        <a href='/'><h1>Food mart</h1></a>
        <div className='nav-items'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to=''>Contact</Link></li>
                <li><Link to=''>Cart</Link></li>   
            </ul>
        </div>
        {/* {isLoggedIn ? <button onClick={() => {setIsLoggedIn(false)}}>Log Out</button> : <button onClick={() => {setIsLoggedIn(true)}}>Log In</button>} */}
    </div>)
};

export default Header;