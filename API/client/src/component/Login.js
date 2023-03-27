import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // login
    console.log(username, password);
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    // logout 
    setIsLoggedIn(false);
  }

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>Welcome, {username}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label className='form-label'>
            Username:
            <input type="text" value={username} onChange={event => setUsername(event.target.value)} />
          </label>
          <br />
          <label className='form-label'>
            Password:
            <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
          </label>
          <br />
          <button type="submit" className='btn btn-primary'>Login</button>
        </form>
      )}
    </div>
  );
}

export default Login;