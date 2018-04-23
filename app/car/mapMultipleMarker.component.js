import React, { Component,propTypes } from 'react';
import RichTextEditor from 'react-rte';

class MapMultipleMarker extends React.Component {


  
  constructor(props) {
    super(props)
    this.state={
      address:'610 E Weddell Drive,Sunnyvale,CA,94089',
      latitude:'',
      longitude:'',
      destinationAdd:'',
      directionsService:'',
      directionsDisplay:'',
      locations : [
        ['Bondi Beach', -33.890542, 151.274856, 4],
        ['Coogee Beach', -33.923036, 151.259052, 5],
        ['Cronulla Beach', -34.028249, 151.157507, 3],
        ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
        ['Maroubra Beach', -33.950198, 151.259302, 1],
        ['smokebay',-32.4129198,133.842905,6]
    ],
    locationsData : [
      {name:'Bondi Beach',lat: -33.890542,long: 151.274856},
      {name:'Coogee Beach', lat:-33.923036, long:151.259052},
      {name:'Cronulla Beach',lat: -34.028249, long:151.157507},
      {name:'Manly Beach',lat: -33.80010128657071, long:151.28747820854187},
      {name:'Maroubra Beach',lat: -33.950198,long: 151.259302},
      {name:'smokebay',lat:-32.4129198,long:133.842905}
  ]
    }
    
  }


   async componentDidMount(){


    setTimeout(async function(){
      const _this = this;
      await _this.loadMultipleMarkers(1);
    }.bind(this),0)

   }


 async loadMultipleMarkers(index){
  
  const map = this.map = new google.maps.Map(document.getElementById('map'+index), {
    zoom: 10,
    center: new google.maps.LatLng(-33.92, 151.25),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var infowindow = new google.maps.InfoWindow();

  var marker, i;
  const _this =this;
  for (i = 0; i < this.state.locations.length; i++) { 
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(this.state.locations[i][1], this.state.locations[i][2]),
      map: map
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(_this.state.locations[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
}

 clickroute(lati,long) {
  var latLng = new google.maps.LatLng(lati, long); //Makes a latlng
  //var map = new google.maps.Map(document.getElementById('map1'));
  this.map.panTo(latLng); //Make map global
}

    render(){
     
         console.log('fff-',this.state)
    return (<div>
    <div id="map1" style={{'width': '75%','height': '365px'}}></div>
    {this.state.locationsData.map((row, index) => {
            return <div key={index}><p onClick={this.clickroute.bind(this,row.lat,row.long)}>{row.name}</p></div>
    })}
    </div>);

  
    }
}

export default MapMultipleMarker
