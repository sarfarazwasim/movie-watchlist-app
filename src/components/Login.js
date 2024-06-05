import './Login.scss'
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { setUserId } from '../store/movieStore'
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('');
  const [isLoginDisabled, setIsLoginDisabled] = useState(true);

  useEffect(() => {
    if (email.trim()) {
      setIsLoginDisabled(false)
    } else {
      setIsLoginDisabled(true)
    }
  }, [email]);

  const dispatch = useDispatch()

  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  
  const navigate = useNavigate()
  function handleLogin () {
    if (email.trim()) {
      dispatch(setUserId(email))
      navigate('/')
    }
  }
  return (
    <div className="login">
      <div className='login__box'>
        <input type='text' className='login__box--input' placeholder='Enter e-mail'
        value={email} onChange={handleChange}/>
        <div className={'login__box--btn ' + (isLoginDisabled ? 'disabled-btn' : '')} onClick={handleLogin}>Login</div>
      </div>
    </div>
  );
}

export default Login;
