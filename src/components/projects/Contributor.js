import React from 'react';
import './css/Contributor.css';

function Contributor({contributor}) {
    return (
        <div className="contributor">
            <img src={`${contributor.git}.png`} alt={contributor.name} />
            <p className="contributor-name">{contributor.name}</p> {/* Ajoutez la classe CSS ici */}
        </div>
    );
}

export default Contributor;