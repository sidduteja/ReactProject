import React, { Component } from 'react';
import Modal from './modal.js'
//import $ from 'jquery'

import {Link} from 'react-router-dom';
class Home extends Component {
  constructor(props)
  {
    console.log('constructor')
    super(props)
    this.state ={
      testData:[],
      json:{userId:2}
    }
  }

   async componentWillMount(){
     console.log('componentWillMount')
   }
    // this.setState({testData:this.state.json})
    //  await fetch('https://jsonplaceholder.typicode.com/posts/1',{ 
    //   method: 'GET'
    // })
    //  .then(response => response.json())
    // // .then(json => this.setState({testData:json}))
    // .then(json => console.log('will'))
   

  //  async componentDidMount(){
  //   console.log('componentDidMount')
  //   await fetch('https://jsonplaceholder.typicode.com/posts/1',{ 
  //    method: 'GET'
  //  })
  //   .then(response => response.json())
  //   .then(json => this.setState({testData:json}))
  // }

  modal(){
    console.log('fdf')
    
   // $("p").css("background-color", "yellow");
    //$("#myModal").modal('show');
    
  }

    render(){
      console.log('==render===')
     
      return (<div><p>home</p><br/>
       <div>
       <button type="button" className="btn btn-info btn-lg" data-toggle='modal' data-target="#myModal" onClick={this.modal.bind(this)} >open modal</button>
       
       </div>
       <Modal />
       </div>)
    }
}

export default Home
