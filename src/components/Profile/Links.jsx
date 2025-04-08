import React from 'react';
import SingleLink from './SingleLink';
 export default function Links(props){
    // console.log("Links",props);
    return (
        <div className="links">
        <h3>Links:</h3>
        <ul>
            {
                Object.entries(props.linkes).map(([name,url],index)=>{
                    // console.log(item);
                    return <SingleLink  key={index} link={url} name={name} />
                })
            }
        </ul>
       </div>
    )
}