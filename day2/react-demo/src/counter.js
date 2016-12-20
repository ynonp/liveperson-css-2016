import React from 'react';

export default class MyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.start || 0,
    };    
  }

  inc() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (<p>
      You clicked 
      <span className="times">&nbsp; 
      {this.state.count}
      &nbsp;
      </span>
      <button onClick={this.inc.bind(this)}>Click</button>
    </p>);
  }
}





