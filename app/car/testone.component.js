'use strict'

import React, {Component, PropTypes} from 'react'


class Testone extends Component {


constructor(props){
  super(props)
    
}

testDrive(){
  this.props.drive('teja')
}

 navigationTest(){
  this.props.props.history.push('/')
  //console.log('winLoc--',window.location)
  //console.log('loc--',location)
  //window.location.href='/cars'

}

render(){
  return(<div>
    <p onClick={this.testDrive.bind(this)} >HEllo {this.props.name}</p>
    <button onClick={this.navigationTest.bind(this)}>move to cars</button>
    </div>)
}


}


export default Testone
