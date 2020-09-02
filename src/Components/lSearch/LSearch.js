import React from 'react';
import './LSearch.css';
const LSearch = () => {
    return (
        <div className="fullS">
            <div className="wrapper">
                <div className="search_box">
                    <input
                        type="text"
                        placeholder="what are you looking for?"
                    />
                    <i className="fas fa-search"></i>
                </div>
            </div>
        </div>
    );
};

export default LSearch;
