import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../Header/Header.css';
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { logout } from "../../slices/adminSlice";
import avatar from '../../../assets/imgs/man.png';

const AdminHeader = () => {
    const navigate = useNavigate();
    const isLoggedIn = useSelector(store => store.admin.isLoggedIn);
    const admin = useSelector(store => store.admin.admin);
    console.log('islogheaderadmmm: ', isLoggedIn);
    console.log('user inheaderradfmmmm: ', admin);
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
            dispatch(logout());
                  localStorage.removeItem("admin"); 
                 navigate('/admin/login');
            console.log('Perform logout logic and redirect here');
          }
        });
      };

     return (
        <div className='header'>
        <Link to='/admin/dashboard' ><h1>Food mart Dashboard</h1></Link>
        <div className='nav-items'>
            <ul>
                <li><Link to='/admin/dashboard'>Dashboard</Link></li>
                <li><Link to='/admin/users-list'>Users</Link></li>
                {
                  isLoggedIn ? <li className="logout" onClick={handleLogout}><Link>Log out</Link></li> 
                  : <li><Link to='/admin/login'>Log In</Link></li>
                }
            </ul>
        </div>
        <div className="profile">
        { admin && 
        <>
        <span className="welcome">Welcome {admin?.firstname}!  </span>
        <img
            className="img rounded-circle" src={avatar}
            width="30em" alt="Profile"/>

        </>
        }
      
        </div>
    </div>)
};

export default AdminHeader;