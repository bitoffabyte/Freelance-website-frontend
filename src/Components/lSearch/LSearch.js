import React from 'react';
import './LSearch.css';
const LSearch = () => {
    return (
        <div className="fullS">
            <div className="wrapper">
                <div className="search_box">
                    <input type="text" placeholder={`Try    "ER Diagrams"`} />
                    <i className="fas fa-search"></i>
                </div>
            </div>
        </div>
    );
};

export default LSearch;
