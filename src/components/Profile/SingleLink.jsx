import React from 'react';

const SingleLink = (props)=>{
    return (
        <li><a href={props.link} target="_blank" rel="noreferrer">{props.name}</a></li>
    )
}
export default SingleLink