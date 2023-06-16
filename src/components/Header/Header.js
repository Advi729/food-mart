import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Header.css';
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { logout } from "../../slices/userSlice";
import avatar from '../../../assets/imgs/man.png';

const Header = () => {
    const navigate = useNavigate();
    const isLoggedIn = useSelector(store => store.user.isLoggedIn);
    const user = useSelector(store => store.user.user);
    console.log('islogheader: ', isLoggedIn);
    console.log('user inheaderr: ', user);
    const dispatch = useDispatch();

    const handleLogout = () => {
        Swal.fire({
          title: 'Are you sure?',
          text: 'You will be logged out.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Logout',
          cancelButtonText: 'Cancel',
        //   dangerMode: true,
        }).then((result) => {
          if (result.isConfirmed) {
            // Perform logout logic here (e.g., clearing user session, API requests, etc.)
            // Redirect to the desired logout path
            // history.push('/logout');
            dispatch(logout());
                  localStorage.removeItem("user"); 
                 navigate('/login');
            console.log('Perform logout logic and redirect here');
          }
        });
      };

     return (
      <div className="shadow-md">
        <div className='header h-14'>
        <Link to='/'><h1 className="font-bold text-2xl text-lime-800">FoodMart</h1></Link>
        <div className='nav-items'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to=''>Contact</Link></li>
                <li><Link to=''>Cart</Link></li> 
                <li><Link to='/profile'>Profile</Link></li>  
                {
                  isLoggedIn ? <li className="logout" onClick={handleLogout}><Link>Log out</Link></li> 
                  : <li><Link to='/login'>Log In</Link></li>
                }
            </ul>
        </div>
        <div className="profile">
        { user && 
        <>
        <span className="m-4">Welcome {user?.firstname}!  </span>
        {/* <Link to='/profile' ><img
            className="img rounded-circle" src={avatar}
            width="30em" alt="Profile"/>
        </Link> */}
        </>
        }
      
        </div>
    </div>
    </div>
    )
};

export default Header;