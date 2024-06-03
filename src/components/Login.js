import './Login.scss'

function Login() {
  return (
    <div className="login">
      <div className='login__box'>
        <input type='text' className='login__box--input' placeholder='Enter e-mail'
        onKeyUp={(event) => console.log('login - ', event)}/>
        <div className='login__box--btn'>Login</div>
      </div>
    </div>
  );
}

export default Login;
