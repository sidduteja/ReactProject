import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {browserHistory} from 'react-router';
import Home from '../../common/home.component.js'
import About from '../../common/about.component.js'
import Car from '../../car/car.component.js'
//import Bus from '../../car/bus.component.js'
import Main from '../../common/main.component.js'
import Customers from '../../car/customer.component.js'
import Testing from '../../car/testing.component.js'
import routes from './routes.js'
//import Testone from '../../car/testone.component.js'

ReactDOM.render(
<Router history={browserHistory}> 
  <div>
    <Main />
    <Route exact path="/" component={Home}/>
    {/* <Route path="/about" component={About}/> */}
    <Route  path="/about/:password"
    render={(props) => {
             return  <About name="sidd" {...props} /> 
            }}/>
    <Route path="/cars" component={Car}/>
    <Route path="/customers/:id/:email" component={Customers}/>
    <Route path="/testing" component={Testing}/>
  </div>

</Router>
);
