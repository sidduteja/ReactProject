'use strict'

import React, {Component, PropTypes} from 'react'
import Testone from './testone.component'
import ReactDOM from 'react-dom';
import base64 from 'base-64';
import LoginService from '../../services/loginService'



class Customers extends Component {
  constructor(props) {

    super(props)
      
    this.state = {

     customersData: [],
     siddu:'Dheeraj',
     data:'',
     data1:'',
     name:'siddu'
}

     this.updateState = this.updateState.bind(this);
       this.clearInput = this.clearInput.bind(this);
    };

    updateState(e) {
       this.setState({data1: e.target.value});
    }

    clearInput() {
       this.setState({data: ''});
       ReactDOM.findDOMNode(this.refs.myInput).focus();
    }



  async test(){

  const loginDetails = {
    userName: 'dheeraj',
    
  }    
 // console.log('llll===',loginDetails)
  const loginResult = await LoginService.authCheck(loginDetails);
 //console.log('method==',loginResult)
}

async driving(name){
    
 

   this.setState({name: name}) ;

}
async componentDidMount(){

//await this.driving();


}


  render(){
  const email = base64.decode(this.props.match.params.email)
  //console.log('thisCust---',this)
  return(<div>
    <p onClick={this.test.bind(this)}>Customers</p>
    <p>{this.state.name}</p>
    <Testone name={this.state.siddu} props={this.props} drive={this.driving.bind(this)}/>
    <div>
           <input value = {email} onChange = {this.updateState}></input><br />
          <input value = {this.state.data}  ref = "myInput"></input>

           <button onClick={this.test.bind(this)}>CLEAR</button>
           <h4>{this.state.data1}</h4>
        </div>
        </div>);

}
}


export default Customers
