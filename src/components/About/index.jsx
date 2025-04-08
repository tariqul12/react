import React from 'react'

const About = () => {
    const obj= {
        title:'About',
        style:{color:'red'}
    }
  return (
    <div>
        <h1 {...obj}>About</h1>
    </div>
  )
}

export default About
