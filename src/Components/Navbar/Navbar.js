import React, { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';

import './Navbar.css';

const Navbar = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset);
        };
    }, []);

    return (
        <nav
            className={`${
                offset >= document.body.scrollHeight * 0.5 ? 'onscroll' : ''
            }`}
        >
            <div className="logo">FREELANCE</div>
            <input type="checkbox" id="click" />
            <label htmlFor="click" className="menu-btn">
                <i className="fas fa-bars"></i>
            </label>
            <div className="search_box1">
                <input type="text" placeholder={`Try    "ER Diagrams"`} />
                <i className="fas fa-search"></i>
            </div>
            <ul>
                <li>
                    <a className="active" href="#">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#">Log In</a>
                </li>
                <li>
                    <a href="#">Sign Up</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
