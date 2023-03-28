import React, { useState } from "react";

// function Signup(){
    const Signup = () => {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [email, setEmail] = useState('');
        const [isSignedIn, setIsSignedIn] = useState(false);


        const handleSubmit = (event) => {
            event.preventDefault();
            console.log(username, password);
            setIsSignedIn(true);

        }

         const handleSignout = () => {
            setIsSignedIn(false);
  }
    return(
        <div className="cont1">
        {isSignedIn ? (
        <div>
          <p>Welcome,your now signed in</p>

          <button onClick={handleSignout}>Signout</button>
        </div>
      ) : (
            <form onSubmit={handleSubmit}>
            <p>
            <label className='form-label'>
                Username:
                <input type="text" value={username} placeholder="Username" onChange={event => setUsername(event.target.value)} />
            </label>
            </p>
            <p>
            <label className='form-label'>
                Password:
                <input type="password" value={password} placeholder="Password" onChange={event => setPassword(event.target.value)} />
            </label>
            </p>
            <p>
            <label className='form-label'>
                UserEmail:
                <input type="email" value={email} placeholder="Email" onChange={event => setEmail(event.target.value)} />
            </label>
            </p>
            <button type="submit" className="btn btn-info">Sign Up</button>
            </form>
          )}
        </div>
    )
}
export default Signup