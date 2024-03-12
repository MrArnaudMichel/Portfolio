import React from 'react';

function Contributor({contributor}) {
    return (
        <div className="contributor">
            <img src={`${contributor.git}.png`} alt={contributor.name} />
        </div>
    );
}

export default Contributor;