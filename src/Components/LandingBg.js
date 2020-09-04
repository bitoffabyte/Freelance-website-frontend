import React from 'react';
import './landing.css';
import LSearch from './lSearch/LSearch';
const LandingBg = (props) => {
    return (
        <div
            style={{
                height: '100%',
                width: '100%',
                margin: 0,
                position: 'absolute',
                backgroundImage: `url(${require('../assets/bg.jpg')})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                top: 0,
            }}
            className="img"
        >
            <LSearch home={props.home} />
        </div>
    );
};

export default LandingBg;
