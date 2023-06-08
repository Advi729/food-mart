import { useState } from "react";


const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
     return (
        <div className='header'>
        <a href='/'><h1>Food mart</h1></a>
        <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
        {/* {isLoggedIn ? <button onClick={() => {setIsLoggedIn(false)}}>Log Out</button> : <button onClick={() => {setIsLoggedIn(true)}}>Log In</button>} */}
    </div>)
};

export default Header;