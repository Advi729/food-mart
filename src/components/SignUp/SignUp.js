import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const data = {
        firstname: firstName, 
        lastname: lastName,
        email,
        phone,
        password,
    };

    const handleSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:3000/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            console.log(result.status);
            if(result.status) {
                // navigate('/login');
            }
        } catch (error) {
            console.error(error);
        }
    };
    
    return (
        <div className="signUpParentDiv">
                <label htmlFor="firstname">First Name</label>
                <br/>
                <input
                  className="input"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  id="firstname"
                  name="firstname"
                />
                <br/>
                <label htmlFor="lastname">Last Name</label>
                <br/>
                <input
                  className="input"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  id="lastname"
                  name="lastname"
                />
                <br/>
                <label htmlFor="email">email</label>
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
                <label htmlFor="phone">Phone number</label>
                <br/>
                <input
                  className="input"
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  id="phone"
                  name="phone"
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
                <br/>
                <button onClick={() => handleSubmit(data)}>Sign Up</button>
            <p>login create here</p>
        </div>
    );
};

export default SignUp;