import React, { useRef, useState } from 'react';
import './login.css';
import bg from '../../images/login/bg.jpg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
// import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineGoogle } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';



const Login = () => {

    const location = useLocation();
    const navigate = useNavigate()

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithGithub] = useSignInWithGithub(auth);

    let errorElement;
    if (error) {
        errorElement = <div> <p style={{ color: "red" }}>Error: {error?.message}</p> </div>

    }


    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }


    const handleLoginBlur = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
        console.log(email, password)
    }

   

    return (
        <div>
            <form className='login-page' onSubmit={handleLoginBlur} id= "login">
            <img src={bg} alt="" />
            <div className="login-container">
                <div className='login'>
                    <h2>LOGIN</h2>
                    <div>
                        <div className="social login-social-container">
                            < AiOutlineGoogle onClick={() => signInWithGoogle()} className='social-icon login-social' style={{ color: "white", marginBottom: "7px" }} />
                            < AiFillGithub onClick={() => signInWithGithub()} className='social-icon login-social' style={{ color: "white", marginBottom: "7px" }} />
                            < AiFillFacebook className='social-icon login-social' style={{ color: "white", marginBottom: "7px" }} />
                            < AiFillInstagram className='social-icon login-social' style={{ color: "white", marginBottom: "7px" }} />
                            <hr style={{ color: "white" }} />
                        </div>
                    </div>
                    <input  type="email" name='email' placeholder='Email' style={{ marginTop: "0" }} />
                    <input  type="password" name='password' placeholder='Password' />
                    <div>
                    
                     <Link to="#"><p>Forgoten passeord</p></Link>
                    </div>
                    <div className='login-btn'>
                        <input type="submit" name="submit" value="Login" />
                        <p>{errorElement}</p>
                        <Link to="/signup"><p>Create a new Account</p></Link>
                    </div>
                </div>
            </div>
        </form>
        </div>
    );
};

export default Login;