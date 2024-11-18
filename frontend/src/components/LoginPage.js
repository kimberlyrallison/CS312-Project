import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css'; 
import { postLogin } from '../services/api';


export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
      var response = await postLogin(username, password);
      if (response === 200)
        navigate('./home')
      else
        setError('Incorrect username or password');
    }

    return (
    <>
        <h1>Welcome!</h1>
        <p>{error}</p>
        Username: 
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br/>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /> 
        <br/>       
          <button type="submit" onClick={handleLogin}>Login</button>

    <br/><p>If you are new, please sign up below!</p><br/>
    <Link className='registration-button' to="/register">Register</Link>
    </>
    )
};