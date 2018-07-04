import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Redirect,Route,Switch} from 'react-router-dom'
import {browserHistory} from 'react-router';
import Home from './common/home.component.js'
import About from './common/about.component.js'
import Car from './car/car.component.js'
//import Bus from '../../car/bus.component.js'
import Main from './common/main.component.js'
import Customers from './car/customer.component.js'
import MapBox from './car/mapBox.component.js'
import MapBoxMultiple from './car/mapBoxMultiple.component.js'
import MapDistance from './car/mapDistance.component.js'
import MapMultipleMarker from './car/mapMultipleMarker.component.js'
import Charts from './car/charts.component.js'
import Jquery from './car/Jquery.component.js'

const data = 'hello'

export default <Router history={browserHistory}> 
  <div>
  <Main  />
    <Switch>
    
    <Route exact path="/" component={Home}/>
    <Route  path="/about/:password"
    render={(props) => {
             return  <About name="sidd" {...props} /> 
            }}/>
    
    <Route path="/customers/:id/:email" component={Customers}/>
    <Route path="/cars" component={Car}/>
    <Route exact path="/mapBox"  component={MapBox} />
    <Route path="/mapDistance" component={MapDistance}/>

     <Route path="/mapMultipleMarkers" 
     component={(props) => <MapMultipleMarker {...props}/>}/> 

     <Route path="/charts" 
     render ={(props) => {
     return <Charts {...props}/> }} />


    <Route path="/mapBoxMultiple" component={MapBoxMultiple}/>
     <Route path="/jQuery" component={Jquery}/> 
     <Route exact  path="/jQuery" component={Jquery}></Route>
     <Redirect from="/abc.cfm" to="/jQuery" push />
     </Switch>
  </div>

</Router>

