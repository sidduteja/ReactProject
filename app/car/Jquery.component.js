'use strict'

import React, {Component, PropTypes} from 'react'


class Jquery extends Component{
    constructor(props){
      super(props)
      this.state={
      }
    }

    componentDidMount(){

    $(function(){
        $("#test").css({"background-color": "red"});

        $("#test2").click(function(){
          $("#text1").html("<strong>teja</strong>");
          $("#text2").text("teja");
          $("#text3").val("teja");
        })
    
});
    }

    button(){
        var values = []
        for(var i=1;i<6;i++){
            values.push($('#text'+i).value())
        }

        console.log('--val--',values)
      }

      /* Wil give u text content same like text() and empty for input tags */

    //   button(){
    //     var values = []
    //     for(var i=1;i<6;i++){
    //         values.push($('#text'+i).html())
    //     }

    //     console.log('--val--',values.toString())
    //   }


      /*  Use to get values from html tags like <p> h1 etc */

    //   button(){
    //     var values = []
    //     for(var i=1;i<6;i++){
    //         values.push($('#text'+i).text())
    //     }

    //     console.log('--val--',values.toString())
    //   }


      /* pushing if value is empty and checking array length if greater zero then error */

    //   button(){
    //     var values = []
    //     for(var i=3;i<6;i++){
    //         if($('#text'+i).val()=="")
    //         values.push("")
    //     }

    //     if(values.length > 0){
    //         console.log('error')
    //     }

    //     console.log('--val--',values)
    //   }


    render(){
    return(<div>
    <p  id="text1">JQuery</p><br/>
    <p  id="text2">Html</p><br/>
    <input  id="text3" type="text" value="dheeraj"></input><br/>
    <input  id="text4" type="text" value="chandra"></input><br/>
    <input  id="text5" type="text" value=""></input><br/>
    <button id="test2" >Test</button>
    <button id="test3" onClick={this.button.bind(this)}>values</button></div>)
    }
}
    export default Jquery