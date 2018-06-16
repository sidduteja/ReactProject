import React, { Component } from 'react';
import Modal from './modal.js'
//import $ from 'jquery'

import { Link } from 'react-router-dom';
class Home extends Component {
  constructor(props) {
    console.log('constructor')
    super(props)
    this.state = {
      testData: [],
      json: { userId: 2 },
      parent: 'dheeraj',
      showModal: false,
      value: "test",
      value1: "test2",
      selected:'',
      subCategory:'',
      category:'',
      olx: [{
        id: 1, menu: 'apartment',
        subMenu: [{ id: 1, menu: 'one', name: ['kitchen', '1befroom', '1 hall'] }, { id: 2, menu: 'two', name: ['2 kitchen', '2 bedroom', '2 hall'] }, { id: 3, menu: 'three', name: ['3 kitchen', '3 bedroom', '3 hall'] }]
      },
      {
        id: 2, menu: 'car',
        subMenu: [{ id: 1, menu: 'svu', name: ['1 baleno', '1 ritz', '1 Swift'] }, { id: 2, menu: 'saden', name: ['2 baleno', '2 ritz', '2 Swift'] }, { id: 3, menu: 'hatchback', name: ['3 baleno', '3 ritz', '3 Swift'] }]
      },
      {
        id: 3, menu: 'electronics',
        subMenu: [{ id: 1, menu: 'phone', name: ['1 Lg', '1 samsung', '1 Sony'] }, { id: 2, menu: 'AC', name: ['2 Lg', '2 samsung', '2 Sony'] }, { id: 3, menu: 'Alexa', name: ['3 Lg', '3 samsung', '3 Sony'] }]
      }]
    }
  }

  setChecked(object) {

    this.setState(object);
}

  async componentWillMount() {
    // console.log('componentWillMount')
  }
  // this.setState({testData:this.state.json})
  //  await fetch('https://jsonplaceholder.typicode.com/posts/1',{ 
  //   method: 'GET'
  // })
  //  .then(response => response.json())
  // // .then(json => this.setState({testData:json}))
  // .then(json => console.log('will'))


  async componentDidMount() {
    // console.log('componentDidMount')
    await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => this.setState({ testData: json }))
  }


  changeParent(name) {
    this.setState({ parent: name })
  }
  modal() {
    // console.log('fdf')

    // $("p").css("background-color", "yellow");
    //  $("#myModal").modal('show');
    this.setState({ testData: this.state.json, showModal: true })
  }

  render() {
    console.log('==render===',this.state)

    return (<div><p>{this.state.parent}</p><br />
      <div>
        <button type="button" disabled={this.state.email} className="btn btn-info btn-lg" data-toggle='modal' data-target="#myModal" onClick={this.modal.bind(this)} >open modal</button>
        <br /><input type="text" value={this.state.value != "test" ? this.state.value : this.state.value1}></input>
      {this.state.category == ""?'':(this.state.category + " => " +this.state.subCategory + " => " +this.state.selected)  }
      </div>
      <Modal value={this.state.olx} change={this.changeParent.bind(this)} setChecked={this.setChecked.bind(this)}/>
    </div>)
  }
}

export default Home
