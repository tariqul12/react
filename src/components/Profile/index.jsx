import React from 'react'
import Bio from './Bio'
import Links from './Links'
import './profile.style.css'
import Skills from './Skills'



const Profile = () => {
    const style = {
        color:'white',
    }
    const me = {
        name:'Tariqul Islam',
        bio:'i want to be a fullstract devoloper. I am all ready work in laravel devoloper in bangladesh software devolopment since 2024',
        skilles:['Javascript','HTML','CSS','React','Node.js','Express','MongoDB','MySQL','PHP','Laravel','Git','Github','Bootstrap','Tailwind'],
        links:{
            github:'https://github.com/tariqul12',
            facebook:'https://facebook.com/tariqul',
            linkedin:'https://linkedin.com/in/tariqul12',
            twitter:'https://twitter.com/tariqul12'
        }
    }
  return (
    <div className='container'>
      <Bio name={me.name} bio={me.bio} />
      <Skills skilles={me.skilles} />
      <Links linkes={me.links} />
    </div>
  )
}

export default Profile
