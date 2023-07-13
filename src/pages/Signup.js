import React,{useState} from 'react'
import './Signup.css'

function Signup() {

  const[username,setUsername] =useState();
  const[email,setEmail] =useState('');
  const[password,setPassword] =useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (

  <div className='signup'>
   
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <label>
          Enter email:
          <input type='email' value={email} placeholder='Enter your email' onChange={handleEmailChange} />
        </label>
        <label>
          Create Username:
          <input type="text" value={username} placeholder='Create your username' onChange={handleUsernameChange} />
        </label>
        <label>
          Create password:
          <input type="password" value={password} placeholder='******' onChange={handlePasswordChange} />
        </label>
        <button type='submit'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Signup;