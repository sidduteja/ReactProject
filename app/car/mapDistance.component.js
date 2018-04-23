import React, {Component, PropTypes} from 'react'


class MapDistance extends Component{

constructor(props){
    super(props)
    this.state={
        destinationAdd:'',
        address:'610 E Weddell Drive,Sunnyvale,CA,94089',
        latitude:'',
        longitude:'',
        destinationAdd:'',
        directionsService:'',
        directionsDisplay:'',
    }
}

async componentDidMount(){
    setTimeout(function() {
      var geocoder = new google.maps.Geocoder();
      //var address = this.ceData[2]+', '+this.ceData[3]+', '+this.ceData[4]+', '+this.ceData[5]
      const _this= this
      geocoder.geocode( { 'address': this.state.address}, async function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
          var latitude = results[0].geometry.location.lat();
          var longitude = results[0].geometry.location.lng();
          await _this.setState({latitude, longitude})
          await _this.loadMap(1); 
          } 
     })
    }.bind(this), 0); 

   
   }


     loadMap(index){
    
    var directionsService = new google.maps.DirectionsService();
      var directionsDisplay = new google.maps.DirectionsRenderer();
      this.setState({'directionsService': directionsService});
      this.setState({'directionsDisplay': directionsDisplay});
   var locations = {
    lat: Number(this.state.latitude),
    lng: Number(this.state.longitude)
  };
  
    //var index=1;
     var map = new google.maps.Map(document.getElementById('map' + index), {
      zoom: 7,
      center: locations,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });


    this.state.directionsDisplay.setMap(map);
        
    var contentString = '<div id="content">'+this.state.address+'</div>';
    var infowindow = new google.maps.InfoWindow({content: contentString});
    var marker = new google.maps.Marker({position: locations, map: map});

    marker.addListener('click', function () {
      infowindow.open(map, marker);
    });
    
  }

     
// //function for auto complete 
  destinationLocation(){
    var address = '';
    const _this = this;
   
      var places = new google.maps.places.Autocomplete(document.getElementById('txtPlaces'));
      google.maps.event.addListener(places, 'place_changed', function () {
          var place = places.getPlace();
          address = place.formatted_address; 
          _this.setState({'destinationAdd': address}); 
      });

  }

   handleFormSubmit(event) {
        
    const _this = this;
    const community_lat = this.state.latitude;
    const community_long = this.state.longitude;
    var request = {
      origin: {lat: Number(community_lat), lng: Number(community_long)}, 
      destination: this.state.destinationAdd,
      travelMode: google.maps.DirectionsTravelMode.DRIVING
    };

    _this.state.directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        _this.state.directionsDisplay.setDirections(response);
        var distance = response.routes[0].legs[0].distance.text;
        var duration = response.routes[0].legs[0].duration.text; 
        var dvDistance = document.getElementById("dvDistance");
               dvDistance.innerHTML = "" ;
               dvDistance.innerHTML += "<p>Drive Time: " + duration + "</p>";
               dvDistance.innerHTML += "<p>Distance: " + distance + "</p>";
      }
    });
  }

render(){
return <div>
    <div id="map1" style={{'width': '75%','height': '365px'}}></div>
 <div><input type="text" id="txtPlaces" placeholder="Enter a location" onChange={this.destinationLocation.bind(this)}/></div>
<br/>
<br/>
 <button onClick={this.handleFormSubmit.bind(this)}>Search</button> 
<span id="dvDistance"></span> 
</div>

}


}
export default MapDistance