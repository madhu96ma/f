import React from "react";
class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }
    incrementCount = () => {
        this.setState({count: this.state.count + 1});
    }
  render() {
    return (
      <div>
        <h1>About Us</h1>
        <p>This is the about page of our application.</p>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}


   
  

export default About;