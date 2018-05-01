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
    mapId:'map',
    title:'test',
    description:"test description"
  }
}

async componentDidMount() {		
  await this.mapInitialization();
}

mapInitialization(){
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGhlZXJhamNoYW5kcmEiLCJhIjoiY2o1ZGdpbGgwMGk2ZTJycXhidTNnc2xwbyJ9.H8CE7G9egOcbvWLgH9RZEw';
    const map  = this.map =  new mapboxgl.Map({
        container: this.state.mapId,
        center:[-122.420679, 37.772537],
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 5,
        
        maxZoom: 20
    });

    var el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker(el)
    .setLngLat([-122.420679, 37.772537])
    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML('<h3>' + this.state.title + '</h3><p>' + this.state.description + '</p>'))
    .addTo(map);
    // const popup = new mapboxgl.Popup({})
    // .setHTML(<p>text</p>);
      }
  
fly(){
  console.log('fly')
  this.map.flyTo({
    center:[-83.2396334,42.3526253]});
}

// ({
//   center: [
//       -74.50 + (Math.random() - 0.5) * 10,
//       40 + (Math.random() - 0.5) * 10]
// });

render(){

return(<div>
<div id={this.state.mapId} style={{ width: "90vw",  height: "70vh"}}></div><br/>
<button onClick={this.fly.bind(this)}>fly</button></div>);

}


}

export default Testing
