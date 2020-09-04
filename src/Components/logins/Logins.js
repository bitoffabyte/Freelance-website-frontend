import React from 'react';
import './login.css';
const Logins = () => {
    return (
        <div>
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    margin: 0,
                    position: 'absolute',
                    backgroundImage: `url(${require('../../assets/bg.jpg')})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    top: 0,
                    zIndex: 0,
                }}
                className="img"
            >
                <div className="fullS"></div>
            </div>
        </div>
    );
};

export default Logins;
