import React, { useState } from 'react';
import './RegistrationPage.css'; 
import { useNavigate } from 'react-router-dom';
import { postRegister } from '../services/api';

export default function Register() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async () => {
      var response = await postRegister(username, password);
      if (response === 200)
        navigate('/')
      else if (response === 401)
        setError('That username is already associated with an account');
    }

    return (
    <>
        <h1>Register</h1>
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
          <button className="registration-button" type="submit" onClick={handleRegister}>Create Account</button>
    </>
    )
};