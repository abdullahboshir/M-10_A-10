import React from 'react';
import bg from '../../images/login/bg.jpg' 

const SignUp = () => {

    const handlesignup = event => {
        event.preventDefault()
        const firstName = event.target.firsName.value;
        const lastName = event.target.lastName.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

    }

    return (
        <form action="" onSubmit={handlesignup} className='login-page'>
             <img src={bg} alt="" />
            <div className="signup-container">
                <div className='signup'>
                    <h2>Sign Up</h2>
                    <div className='name'>
                        <input className='firsName' type="text" name='firsName' placeholder='First Name' required />
                        <input className='lastName' type="text" name='lastName' placeholder='Last Name' required />
                    </div>
                    <div className='field'>
                        <input type="email" name='email' placeholder='Your Email' required />
                        <input type="password" name='password' placeholder='Your Password' required />
                        <input type="password" name='confirmPassword' placeholder='Confirm Password' required />
                    </div>
                    <div>
                        <input type="checkbox" required /><span>Accept the terms of Use & Privacy Policy</span>
                    </div>
                    <input className='signUp-btn' type="submit" value="Sign Up" />
                    <p className='pe-auto'>You have already an account? </p>
                </div>
            </div>
        </form>
    );
};

export default SignUp;