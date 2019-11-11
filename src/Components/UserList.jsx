import React, { Component } from 'react'

import './UserList.css'

class UserList extends Component {

    constructor(props) {
        super(props);
        // console.log("Props are====>",this.props);

    }


    render() {
      

        return (

            <div className="data">
                {/* {this.props.firstNameItem+" "+this.props.lastNameItem+" "+this.props.emailItem+" "+this.props.serviceItem} */}
                <div id="firstnamediv">
                    <div id = "item1"> 
                    {this.props.firstNameItem+" "}
                    </div>
               
                </div>
                <div id="lastnamediv">
                    <div id = "item2">
                    {this.props.lastNameItem+" "}
                    </div>
               
                </div>
                <div id="emaildiv">
                {this.props.emailItem+" "}
                </div>
                <div id="servicediv">
                {" "+this.props.serviceItem+" "}
                </div>
            </div>


        )
    }


}

export default UserList