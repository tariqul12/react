import React from 'react';
import SingleSkill from './SingleSkill';

function Skills(props){
 
    return (
        <div className="skills">
            <h3>Skills:</h3>
            <ul>
                {
                    props.skilles.map((item,index)=>{
                        return <SingleSkill key={index} skill ={item} />
                    })
                }
               
            </ul>
       </div>
    )
}
export default Skills