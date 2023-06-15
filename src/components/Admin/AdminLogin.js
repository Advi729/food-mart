import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../../slices/adminSlice";

const AdminLogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const data = {
        email, 
        password,
    }
    const dispatch = useDispatch();
    const handleSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:3000/api/auth/admin-login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            if(result.status) {
                if (result.admin.accessToken) {
                    localStorage.setItem("admin", JSON.stringify(result.admin));
                    dispatch(loginAdmin(result.admin));
                  }
                //   localStorage.removeItem("user");   
                console.log('accesstoken:;', result.admin);
                navigate('/admin/dashboard');
            }
        } catch (error) {
            console.error('error in admin login: ',error);
        }
    };

    return (
        <div className="loginParentDiv">
            <label htmlFor="email">Email</label>
            <br/>
            <input 
                className="input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                name="email"
            />
            <br/>
            <label htmlFor="password">Password</label>
            <br/>
            <input 
                className="input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                name="password"
            />
            <br/>
            <button onClick={() => handleSubmit(data)}>Log In</button>
        </div>
    );    
};

export default AdminLogin;