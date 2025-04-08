import React from 'react';

class Contact extends React.Component {
    render(){
        const obj = {
            title:'Contact',
            style:{   
                color:"white",
                backgroundColor:"red",
                fontSize:"50px"
            }
        }
        return (
            <>
            <h1 {...obj}>{this.props.name}</h1>
            <p style={obj.style}>{new Date().toLocaleString()}</p>
            </>
        );
    }
}
export default Contact;