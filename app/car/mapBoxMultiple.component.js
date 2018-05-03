'use strict'

import React, {Component, PropTypes} from 'react'
import QrReader from 'react-qr-reader'
import S3Upload from 'react-s3-uploader/s3upload';
import Rating from 'react-rating'

class MapBoxMultiple extends Component{
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
    description:"test description",
     jSon :  [{
      "type": "Feature",
      "properties": {
          "iconSize": [30, 30],
          "message": "<p>pointone</p>",
      },
      "geometry": {
          "type": "Point",
          "coordinates": 
            [-83.2396334,42.3526253]
          
      }
  },
  {
    "type": "Feature",
    "properties": {
        "iconSize": [30, 30],
        "message": "<p>pointtwo</p>"
    },
    "geometry": {
        "type": "Point",
        "coordinates": 
          [22.5288914,45.0804521]
        
    }
},
{
  "type": "Feature",
  "properties": {
      "iconSize": [30, 30],
      "message": "<p>pointthree</p>"
  },
  "geometry": {
      "type": "Point",
      "coordinates": 
        [78.4354041,17.4308632]
      
  }
}
],
fly:[
  {'center': [-83.2396334,42.3526253]},
  {'center': [22.5288914,45.0804521]},
  {'center': [78.4354041,17.4308632]}
],
place:[{place1:"place1"},{place1:"place2"},{place1:"place3"}]
  }
}

componentWillMount(){
  
}

async componentDidMount() {		
 
  await this.mapInitialization();
 
}

mapInitialization(){
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGhlZXJhamNoYW5kcmEiLCJhIjoiY2o1ZGdpbGgwMGk2ZTJycXhidTNnc2xwbyJ9.H8CE7G9egOcbvWLgH9RZEw';
   
    const geojson = {
      "type": "FeatureCollection",
      "features": this.state.jSon
    }
    const map  = this.map =  new mapboxgl.Map({
        container: this.state.mapId,
        center: [-86.2731788,39.7796999],
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 5,
        
        maxZoom: 20
    });

    geojson.features.forEach(function(marker, index) {
      var el = document.createElement('div');
      el.className = 'marker'
      el.innerHTML= '<i class="fa fa-map-marker"></i>';
      el.style.width = marker.properties.iconSize[0] + 'px';
      el.style.height = marker.properties.iconSize[1] + 'px';
      el.style.fontSize = '60px';

      el.addEventListener('click', function(e) {
          $('.fa.fa-map-marker').css("color", "");
          e.target.style.color = '#dc703e';
         
      });

        // create the marker
        new mapboxgl.Marker(el)
             .setLngLat(marker.geometry.coordinates)
            .setPopup(new mapboxgl.Popup({ offset: 25 })
           .setHTML(marker.properties.message))
           .addTo(map);

  });
  
    
      }


 
  
fly(index){
  const  monument =this.state.fly[index];
  this.map.flyTo(monument);
}



render(){

return(<div>
 
 
<div id={this.state.mapId} style={{ width: "90vw",  height: "70vh"}}></div><br/>
{this.state.place.map((menu, menuIndex) => {
 
  return <p key={menuIndex} onClick={this.fly.bind(this,menuIndex)}>{menu.place1}</p>
})}
</div>);

}


}

export default MapBoxMultiple
