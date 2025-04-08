import React from 'react';
import './style.css';

function Avatar({src,height,width}) {
    return (
        <div>
            <img className="avatar" src={src} height={height} width={width} />
        </div>
    );
}
export default Avatar;