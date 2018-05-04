/* Importing the node modules, child components, services and controllers used 
   inside BookNow component */
   import React from 'react';
  
   
   import {Link} from 'react-router-dom';
   import DatePicker from 'react-datepicker'
   import moment from 'moment'
  

   /* BookNow Component initialization */
   class BookNow extends React.Component {
       /* Initializing objects of its BookNow class */
       constructor(props) {
        console.log('modalconstructor')
           super(props)
           console.log('==props==',props)
            this.state={
                
               
            }
       }

       async componentWillMount(){
        console.log('modalcomponentWillMount')
       }

       async componentDidMount(){
        console.log('modalcomponentDidMount')
       }

       componentWillReceiveProps(nextProps,prevProps){ 
       
        console.log('componentWillReceiveProps',nextProps,prevProps)
      
        }


        parentChange(){
          
        //  this.props.change('teja')

        setTimeout(async function() {
          jQuery(function($) {
              $('#myModal').modal('hide');
          });
   }, 10000);
        }

      
       /* It is invoked to return html content */
       render() {
           console.log('yyy')
           return (
            <div id="myModal" className="modal fade" role="dialog" data-backdrop="static">
  <div className="modal-dialog">

   
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal">&times;</button>
        <h4 className="modal-title">Modal Header</h4>
      </div>
      <div className="modal-body">
        <p>Some text in the modal.</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" onClick={this.parentChange.bind(this)} >Close</button>
      </div>
    </div>

  </div>
</div>
   
           );
       }
   }
   export default BookNow;