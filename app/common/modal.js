/* Importing the node modules, child components, services and controllers used 
   inside BookNow component */
import React from 'react';


import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker'
import moment from 'moment'


/* BookNow Component initialization */
class BookNow extends React.Component {
  /* Initializing objects of its BookNow class */
  constructor(props) {
    console.log('modalconstructor')
    super(props)
    console.log('==props==', props)
    this.state = {
      showMenus: false,
      type: 0,
      showSubMenus: false,
      subMenuType: 0,
      subCatName:'',
      subMenuName:''

    }
  }

  async componentWillMount() {
    console.log('modalcomponentWillMount')
  }

  async componentDidMount() {
    console.log('modalcomponentDidMount')
  }

  componentWillReceiveProps(nextProps, prevProps) {

    console.log('componentWillReceiveProps', nextProps, prevProps)
    this.setState({ showMenus: false, showSubMenus: false })
  }


  parentChange() {

    //  this.props.change('teja')

    setTimeout(async function () {
      jQuery(function ($) {
        $('#myModal').modal('hide');
      });
    }, 10000);
  }

  showMore(index, row) {
    this.setState({ showMenus: true, type: index, showSubMenus: false,subCatName:row.menu })
  }
  showSubCategories(index,row) {
    this.setState({ showMenus: true, subMenuType: index, showSubMenus: true, subMenuName:row.menu })
  }

  selected(row) {
    var object = {};
    object['selected'] = row;
    object['category'] = this.state.subCatName;
    object['subCategory'] = this.state.subMenuName;
    this.setState(object);
    this
        .props
        .setChecked(object)
 }

  /* It is invoked to return html content */
  render() {
    console.log('yyy', this.state)
    return (
      <div id="myModal" className="modal fade" role="dialog" data-backdrop="static">
        <div className="modal-dialog">


          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Modal Header</h4>
            </div>
            {this.state.showMenus ? '' :
              <div className="modal-body">
                <div className="row">
                  {this.props.value.map((row, index) => {
                    return <div className="col-sm-6" key={index} ><p onClick={this.showMore.bind(this, index, row)}>{row.menu}</p></div>
                  })}
                </div>
              </div>
            }
            <div className="modal-body">
              <div className="row">
                {this.state.showMenus ?

                  <div>
                    <div className="col-sm-4">
                      <h4>Categories</h4>
                      {this.props.value.map((row, index) => {
                        return <p key={index} onClick={this.showMore.bind(this, index, row)}>{row.menu}</p>
                      })}
                    </div>

                    <div className="col-sm-4">
                      <h4>{this.state.subCatName}</h4>
                      {this.props.value[this.state.type].subMenu.map((row, index) => {
                        return <p key={index} onClick={this.showSubCategories.bind(this, index,row)}>{row.menu}</p>
                      })}
                    </div>

                  </div>
                  : ''}

                {this.state.showSubMenus ? <div className="col-sm-4">
                  <h4>{this.state.subMenuName}</h4>
                  {this.props.value[this.state.type].subMenu[this.state.subMenuType].name.map((row, index) => {
                    return <p key={index} onClick={this.selected.bind(this,row)} >{row}</p>
                  })}
                </div> : ''}
              </div>
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