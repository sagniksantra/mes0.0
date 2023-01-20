import React, { useState } from 'react';
import '../../App.css';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';

function Login() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the email, password, and name to the server for registration
  }

  return (
    <div className="log-in">
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Username:
        <input
          type="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />

      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Sign up</button>
      <button type="submit">Login with GOOGLE</button>
      <button type="submit">register</button>
    </form>
    </div>
  );
}

export default Login;
