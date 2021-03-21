import React,{Component} from 'react';
import axios from 'axios/index';
import "../chatbot/Chatbot.css";

class Chatbot extends Component{

   constructor(props){
       super(props);
       
       this.state = {
           messages:[]
       }


   }




    render(){
        return(
            <div className="chatbot1">
                   <div className="chatbot1_1">
                     <h2>Chatbot</h2>
                     <div className="chatbot_input">
                         <input type="text"/>
                     </div>
                     
                   </div>
            </div>
        )
    }

}

export default Chatbot;
