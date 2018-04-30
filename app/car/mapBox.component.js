'use strict'

import React, {Component, PropTypes} from 'react'
import QrReader from 'react-qr-reader'
import S3Upload from 'react-s3-uploader/s3upload';
import Rating from 'react-rating'

class Testing extends Component{
constructor(props){
  super(props)
  this.state={
    data:'test',
    data1:[],
    delay: 300,
    result: 'No result',
    responseData:{},
    result:0,
    mapId:'map'
  }
}

async componentDidMount() {		
  await this.mapInitialization();
}

mapInitialization(){
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGhlZXJhamNoYW5kcmEiLCJhIjoiY2o1ZGdpbGgwMGk2ZTJycXhidTNnc2xwbyJ9.H8CE7G9egOcbvWLgH9RZEw';
    var map  =  new mapboxgl.Map({
        container: this.state.mapId,
        center: [-122.420679, 37.772537],
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 1,
        
        maxZoom: 20
    });
      }
  




render(){

return(<div>
<div id={this.state.mapId} style={{ width: "90vw",  height: "70vh"}}></div></div>);

}


}

export default Testing
