import React, {Component} from 'react';
import { Link } from 'react-router-dom';
//import { Link , hashHistory} from 'react-router';
//import React, {Component} from 'react';
//import About from './about.component.jsx'
import base64 from 'base-64';
class Main extends Component {

  constructor(props) {
    super(props)
   
    this.state = {
      boardName: '',
      boardIconUrl: '',
      boardType: '',
      loaded: false
    }

  }

 

    render(){
        return(
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/cars">Cars</Link></li>
                            <li><Link to="/about/1234">dataTable/streetView</Link></li>
                            <li><Link to={'/customers/2/' + base64.encode('dheeraj@gmail.com')}>customer</Link></li>
                            <li><Link to="/mapBox">MapBox</Link></li>
                            <li><Link to="/mapBoxMultiple">MBMultiple</Link></li>
                            <li><Link to="/mapDistance">mapDistance</Link></li>
                            <li><Link to="/mapMultipleMarkers">mapMultipleMarkers</Link></li>
                            <li><Link to="/charts">charts</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div>

                    {this.props.children}
                </div>
                <div><p> MAin PAge</p>
                </div>
            </div>
        );
    }
}

export default Main
