import React from 'react';
import './css/Contributor.css';

function Contributor({contributor}) {
    return (
        <div className="content-container">
            <div className="contributor">
                <a href={contributor.git} target="_blank" rel="noopener noreferrer">
                    <img src={`${contributor.git}.png`} alt={contributor.name}/>
                </a>
                <p className="contributor-name">{contributor.name}</p>
            </div>
        </div>
    );
}

export default Contributor;