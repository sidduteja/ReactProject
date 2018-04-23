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
    result:0
  }
}



  componentDidMount(){

      }
  




render(){

return(<div>Map Box</div>);

}


}

export default Testing
