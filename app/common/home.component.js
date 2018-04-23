import React, { Component } from 'react';

class Home extends Component {
  constructor(props)
  {
    super(props)
  }

next(){
  this.props.history.push("/cars");
}

    render(){

        return (<h1 onClick={this.next.bind(this)}>Cars Page</h1>);
    }
}

export default Home
