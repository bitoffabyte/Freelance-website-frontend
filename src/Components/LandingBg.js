import React from 'react';
import './landing.css';
import LSearch from './lSearch/LSearch';
const LandingBg = () => {
    return (
        <div
            style={{
                height: '100%',
                width: '100%',
                position: 'absolute',
                backgroundImage: `url(${require('../assets/bg.jpg')})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                top: 0,
            }}
            className="img"
        >
            <LSearch />
        </div>
    );
};

export default LandingBg;
