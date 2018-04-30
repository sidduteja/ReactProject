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
      json:{userId:2},
      parent:'dheeraj',
      showModal:false,
      value:"test",
      value1:"test2"
    }
  }

   async componentWillMount(){
    // console.log('componentWillMount')
   }
    // this.setState({testData:this.state.json})
    //  await fetch('https://jsonplaceholder.typicode.com/posts/1',{ 
    //   method: 'GET'
    // })
    //  .then(response => response.json())
    // // .then(json => this.setState({testData:json}))
    // .then(json => console.log('will'))
   

   async componentDidMount(){
   // console.log('componentDidMount')
    await fetch('https://jsonplaceholder.typicode.com/posts/1',{ 
     method: 'GET'
   })
    .then(response => response.json())
    .then(json => this.setState({testData:json}))
  }


   changeParent(name){
    this.setState({parent:name})
   }
  modal(){
   // console.log('fdf')
    
   // $("p").css("background-color", "yellow");
  //  $("#myModal").modal('show');
  this.setState({testData:this.state.json,showModal:true})
  }

    render(){
      console.log('==render===')
     
      return (<div><p>{this.state.parent}</p><br/>
       <div>
       <button type="button" disabled={this.state.email} className="btn btn-info btn-lg" data-toggle='modal' data-target="#myModal" onClick={this.modal.bind(this)} >open modal</button>
       <br/><input type="text" value={this.state.value != "test" ? this.state.value:this.state.value1}></input>
       </div>
      <Modal value={this.state.testData} change={this.changeParent.bind(this)}/>
       </div>)
    }
}

export default Home
