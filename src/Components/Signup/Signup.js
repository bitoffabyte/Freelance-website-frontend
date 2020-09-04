import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';
import '../Login/login.css';
const Signup = () => {
    useEffect(() => {
        Aos.init({ duration: 800 });
        Aos.refresh();
    }, []);
    return (
        <div class="login-box" data-aos="fade-down">
            <h2>Sign Up</h2>
            <form>
                <div class="user-box">
                    <input type="text" name="" required="" />
                    <label>Name</label>
                </div>
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
                <p className="narayan">
                    Already a user ,
                    <NavLink to="/signup" className="asdddd">
                        Log In
                    </NavLink>{' '}
                </p>
            </form>
        </div>
    );
};

export default Signup;
