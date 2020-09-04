import React, { useState } from 'react';
import './LSearch.css';

const LSearch = (props) => {
    let [s, us] = useState(props.home);
    console.log(s);
    return (
        <div className="fullS">
            <div className="wrapper">
                {s ? (
                    <div className="search_box">
                        <input
                            type="text"
                            placeholder={`Try    "ER Diagrams"`}
                        />
                        <i className="fas fa-search"></i>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default LSearch;
