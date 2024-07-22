// src/Register.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate =useNavigate()

   
    

  const register = async () => {
    try {
      await axios.post('http://localhost:5000/register', { username, password });
      alert('Registration successful. Please log in.');
      // navigate('/login');
      
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
  <div className='w-full flex justify-center '>
    <div  className=' flex flex-col w-[600px] gap-5 py-20'>
      <h1 className=' text-center font-bold text-2xl'>Register</h1>
      <input  className=' py-2 px-4  rounded-md border-[1px] focus:outline-green-500 border-slate-400' 
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input  className=' py-2 px-4  rounded-md border-[1px] focus:outline-green-500 border-slate-400'
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <small className='text-red-500'>{error}</small>}
      <button className=' bg-blue-500 py-2 px-4 rounded-md text-white font-bold' onClick={register}>Register</button>
      <Link to='/login'> <small className='text-white' >Already have a account <span className=' underline text-blue-700 '>Login here</span>  </small></Link>
    </div>
    </div>
  );
};

export default Signup;
