import React from 'react';


class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }
    
    eventHandler = () => {
        console.log('test');
    }

    render() {
        return (
            <div>
               <h1>Welcome to Stempro</h1>
               <h4>{this.props.name}</h4>
               <input type='button' onClick={this.eventHandler} value='Click me' />
            </div>
        );
    }
}

export default Welcome;
