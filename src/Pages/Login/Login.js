import React, { useState } from 'react';
import './login.css';
import bg from '../../images/login/bg.jpg'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {

      const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    const location = useLocation();
    const navigate = useNavigate()

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    let errorElement;
    if (error) {
        errorElement = <div> <p style={{ color: "red" }}>Error: {error?.message}</p> </div>

    }



    let from = location.state?.from?.pathname || "/";

    if(user){
        navigate(from, { replace: true });
    }



    const handleEmailBlur = event => {
        setEmail(event.target.value);
    };

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    };

    const handleLoginBlur = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }


    return (
        <form className='login-page'  onClick={handleLoginBlur}>
            <img src={bg} alt="" />
            <div className="login-container">
                <div className='login'>
                    <h2>LOGIN</h2>
                    <input onBlur={handleEmailBlur} type="email" name='email' placeholder='Email' />
                    <input onBlur={handlePasswordBlur} type="password" name='password' placeholder='Password' />
                    <div>
                        <span>Forgoten passeord</span>
                    </div>
                    <div className='login-btn'>
                         <input type="submit" name= "submit" value="Login" />
                        <p>{errorElement}</p>
                        <Link to="/signup"><p>Create a new Account</p></Link>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Login;