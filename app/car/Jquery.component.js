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

        $("#test4").click(function(){
          $("#text1").html("");
          $("#text2").html("");
        })
    
});
    }

    button(){

      var values = []

      /* get values based on html tags and className we use text() as its does not value attribute*/

      // $("p.class").each(function() {
      //        values.push($(this).text())
      //    })



     /* get values based on html tags and className*/

      // $("input.class").each(function() {
      //     values.push($(this).val())
      // })
      
      // $("textarea.class").each(function(){
      //        values.push($(this).val())
      // })

      console.log('--val--',values)
    

      /* Will give u value content for input tags */

        // var values = []
        // for(var i=1;i<6;i++){
        //     values.push($('#text'+i).val())
        // }

        // console.log('--val--',values)
      



      /* Will give u text content same like text() and empty for input tags */

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



    }

    render(){
    return(<div>
    <p  id="text1" className="class">JQuery</p><br/>
    <p  id="text2" className="class">Html</p><br/>
    <input  id="text3" className="class" type="text" value="dheeraj"></input><br/>
    <input  id="text4" className="class" type="text" value="chandra"></input><br/>
    <input  id="text5" className="class" type="text" value="Teja"></input><br/>
    <textarea className="class" value="abhi"></textarea><br/>
    <textarea className="class" value="Reddy"></textarea><br/>

    <button id="test2" >Test</button>
    <button id="test3" onClick={this.button.bind(this)}>values</button>
    <button id="test4" >values</button></div>)
    }
}
    export default Jquery