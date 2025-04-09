import React from 'react';
import Child from './child.jsx';

class Parents extends React.Component {
    getParents(content){
        console.log(content);
    }
  render() {
    // this.getParents(this);
    return (
      <div>
        <h1>Parents</h1>
        <Child func={this.getParents} />
      </div>
    );
  }
}

export default Parents;