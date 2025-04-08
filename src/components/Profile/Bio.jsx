import React from 'react'

const Bio = (props)=> {
    return (
        <div className="bio">
        <h1>{props.name}</h1>
        <p>{props.bio}</p>
   </div>
    )
}
export default Bio