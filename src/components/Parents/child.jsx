import React from 'react';

class Child extends React.Component {
    render() {
        this.props.func(this);
        return (
            <div>
                <h1>Child</h1>
            </div>
        );
    }
}

export default Child;