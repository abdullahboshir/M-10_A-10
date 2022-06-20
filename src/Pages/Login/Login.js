import React from 'react';
import './login.css';

const Login = () => {
    return (
        <form className='login-page'>
            <div className="login-container">
                <div className='login'>
                <h2>Login</h2>
                    <input type="text" name='name' placeholder='First Name' />
                    <input type="text" name='name' placeholder='Last Name' />
                </div>
            </div>

         
            <div className="signup-container">
                <div className='signup'>
                    <h2>Sign Up</h2>
                    <div className='name'>
                        <input className='firsName' type="text" name='name' placeholder='First Name' />
                        <input className='lastName' type="text" name='name' placeholder='Last Name' />
                    </div>
                    <div className='field'>
                        <input type="email" name='email' placeholder='Your Email' />
                        <input type="password" name='password' placeholder='Your Password' />
                        <input type="password" name='confirmPassword' placeholder='Confirm Password' />
                    </div>
                    <div>
                        <input type="checkbox" /><span>Accept the terms of Use & Privacy Policy</span>
                    </div>
                    <input className='signUp-btn' type="button" value="Sign Up" />
                </div>
            </div>
        </form>
    );
};

export default Login;