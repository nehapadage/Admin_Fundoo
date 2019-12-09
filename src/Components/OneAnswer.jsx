import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import {Accept} from '../services/userService'
import {Reject} from '../services/userService'
class OneAnswer extends Component {

    constructor(props) {
        super(props);
        // console.log("Props are====>",this.props);

        this.state = {
            message: this.props.answer.message,
            id:this.props.id
        };

    }

    componentDidMount=async()=>{
    //     var msg=this.state.message
    //     console.log("Whole message",msg);
        
    //     var stripedHtml = msg.replace(/<[^>]+>/g, '');
    //     console.log("Only message",stripedHtml);

    //   await this.setState({message:stripedHtml})

    
        

    }

    handleAccept=()=>{
    //    var data={
    //        id:this.state.id 
    //     }
        Accept(this.state.id).then(res=>{
            console.log("Response in accept",res);
            

        })
        .catch(err=>{
            console.log("Error===>",err);
            
        })
    }

    handleReject=()=>{
        // var data={
        //     id:this.state.id 
        // }
        Reject(this.state.id).then(res=>{
            console.log("Response in reject",res);
            

        })
        .catch(err=>{
            console.log("Error===>",err);
            
        })
    }

    render() {
        return (
            <div id="mainAns">

                <div id="ans">
                    Answer
            </div>
                <div id="message" dangerouslySetInnerHTML={{ __html: this.state.message }}></div>
                    {/* {this.state.message} */}
               
           

            <div style={{display:"flex",flexDirection:"row"}}>
                <div style={{margin:"1%"}}>
                    <Button
                        id="Button"
                        variant="contained"
                        color="primary"
                        onClick={this.handleAccept}
                    >
                        Accept
                    </Button>
                </div>
                <div style={{margin:"1%"}}>
                    <Button
                        id="Button"
                        variant="contained"
                        color="primary"
                        onClick={this.handleReject}
                    >
                        Reject
                    </Button>
                </div>

            </div>
            </div>
            
                
            
        )
    }
}
export default OneAnswer