import React, { Component,propTypes } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import moment from 'moment'


class About extends React.Component {


  
  constructor(props) {
    super(props)
    this.state={
      data:[{
        first:'dheeraj',
        last:'chandra',
        email:'dheeraj@gmail.com',
        datein:"01/05/2018",
        dateOut:"02/05/2018"
      },
      {
        first:'teja',
        last:'kumar',
        email:'teja@gmail.com',
        datein:"01/06/2018",
        dateOut:"02/06/2018"
      }]
      
    }
  }


    componentDidMount(){

      setTimeout(async function(){
        const _this = this;
        await _this.loadMap();
      }.bind(this),0)
      

   }

   // className ="map-alignment" is added in style.css
   
   loadMap(){
    var fenway = {lat: 42.345573, lng: -71.098326};
    
    const map = this.map = new google.maps.StreetViewPanorama(
      document.getElementById('street-view'), {
        position: fenway
        
      });
   }

   dateFormat(cell){    
    
    return  <div>{moment(cell).format('MM-DD-YYYY')}</div>
}

nameFormat(cell){
  return<div>{cell.toUpperCase()}</div>
}

renderShowsTotal(start, to, total) {
  return (
  <p>booked
  Showing { start } to { to } of { total } entries
  </p>
  );
  }

    render(){
      
    return (<div>
    <div style={{height:'50%'}}>
       <BootstrapTable striped hover id="datatable"  pagination search={true} data={this.state.data} options={{ sizePerPage: 25, sortIndicator: true, paginationShowsTotal: this.renderShowsTotal , prePage: 'Previous', nextPage: 'Next', alwaysShowAllBtns: true}}>
                            <TableHeaderColumn width='175' isKey={true} dataField='first' dataSort={ true } dataFormat={this.nameFormat.bind(this)}>First Name</TableHeaderColumn>
                            <TableHeaderColumn width='200' dataField='last' dataSort={ true }>Last Name</TableHeaderColumn>
                            <TableHeaderColumn width='200' dataField='email' dataSort={ true }>Email</TableHeaderColumn>
                            <TableHeaderColumn width='200' dataField='datein' dataSort={ true } dataFormat={this.dateFormat.bind(this)}>MoveIn Date</TableHeaderColumn>
                            <TableHeaderColumn width='200' dataField='dateOut' dataSort={ true } dataFormat={this.dateFormat.bind(this)}>MoveIn Date</TableHeaderColumn>

     </BootstrapTable>
     </div>
     
     {/* <div >
    
       <button style={{marginTop:'50px'}} onClick={this.loadMap.bind(this)}>Map</button>
       </div> */}

       
     <div id='street-view' className="map-alignment"></div>
    </div>);

  
    }
}

export default About
