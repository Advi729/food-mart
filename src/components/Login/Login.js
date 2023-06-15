import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../slices/userSlice";

const Login = () => {
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
            const response = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            if(result.status) {
                if (result.user.accessToken) {
                    localStorage.setItem("user", JSON.stringify(result.user));
                    dispatch(login(result.user));
                  }
                //   localStorage.removeItem("user");   
                console.log('accesstoken:;', result.user);
                navigate('/');
            }
        } catch (error) {
            console.error('error in login: ',error);
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

export default Login;