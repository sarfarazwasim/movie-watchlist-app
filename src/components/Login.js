import './Login.scss'
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setUserId } from '../store/movieStore'

function Login() {
  const [email, setEmail] = useState('');
  const id = useSelector((state) => state.movie.userId)
  const dispatch = useDispatch()

  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <div className="login">
      <div className='login__box'>
        {id}
        <input type='text' className='login__box--input' placeholder='Enter e-mail'
        value={email} onChange={handleChange}/>
        <div className='login__box--btn' onClick={() => dispatch(setUserId(email))}>Login</div>
      </div>
    </div>
  );
}

export default Login;
