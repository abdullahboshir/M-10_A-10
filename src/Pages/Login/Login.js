import React from 'react';
import './login.css';
import bg from '../../images/login/bg.jpg' 

const Login = () => {


  
    return (
        <form className='login-page'>
            <img src={bg} alt="" />
            <div className="login-container">
                <div className='login'>
                <h2>Login</h2>
                    <input type="text" name='name' placeholder='First Name' />
                    <input type="text" name='name' placeholder='Last Name' />
                    <div>
                       <span>Forgoten passeord</span>
                    </div>
                    <input className='signUp-btn' type="submit" value="Sign Up" />
                {/* <SocialLogin></SocialLogin> */}
                </div>
            </div>
        </form>
    );
};

export default Login;