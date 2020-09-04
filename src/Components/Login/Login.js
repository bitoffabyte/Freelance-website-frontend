import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './login.css';
import { NavLink } from 'react-router-dom';
const Login = () => {
    useEffect(() => {
        Aos.init({ duration: 800 });
        Aos.refresh();
    }, []);
    return (
        <div class="login-box" data-aos="fade-up">
            <h2>Login</h2>
            <form>
                <div class="user-box">
                    <input type="text" name="" required="" />
                    <label>Username</label>
                </div>
                <div class="user-box">
                    <input type="password" name="" required="" />
                    <label>Password</label>
                </div>
                <a class="submit" href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                </a>
                <p>
                    Not a user ,
                    <NavLink to="/signup" className="asdddd">
                        Sign UP
                    </NavLink>{' '}
                </p>
            </form>
        </div>
    );
};

export default Login;
