import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import Bus from './bus.component.js'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'

class Car extends Component {
 constructor(props){
   super(props);
   console.log('propsCar===',props)
   this.state ={
     people:[
       {"firstname":"siddu","lastname":"teja"},
       {"firstname":"dheeeraj","lastname":"chandra"},
       {"firstname":"goutham","lastname":"babu"}
     ]
   };
 }

 get getdata(){
   console.log("sdfdsfg")
   const content = this.state.people.map((menu, menuIndex) => <Bus x={menu} key={menuIndex} />)
     console.log(content)
   return content
 }
    render(){
      const Map = ReactMapboxGl({
      accessToken: "pk.eyJ1IjoiZGhlZXJhamNoYW5kcmEiLCJhIjoiY2o1ZGdpbGgwMGk2ZTJycXhidTNnc2xwbyJ9.H8CE7G9egOcbvWLgH9RZEw"
      });
        return (<Map
  style="mapbox://styles/mapbox/streets-v9"
  containerStyle={{
    height: "70vh",
    width: "90vw"
  }}>
    <Layer
      type="symbol"
      id="marker"
      layout={{ "icon-image": "harbor-15" }}>

    </Layer>
</Map>);
// return(
//   <div>
//
//     {  this.state.people.map((x,index) => (<p key={index}> hello {x.firstname} {index + 1}</p>
//   ))}
// {this.getdata}
//
// </div>);
}

}

export default Car
