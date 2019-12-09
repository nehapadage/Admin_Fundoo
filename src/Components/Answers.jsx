import React, { Component } from 'react';
import { getUnApprovedAnswer } from '../services/userService'
import './Answers.css'
import OneAnswer from '../Components/OneAnswer'
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';


class Answers extends Component {

    constructor(props) {
        super(props);
        // console.log("Props are====>",this.props);

        this.state = {
            data: []
        };

    }

    componentDidMount() {
        getUnApprovedAnswer().then((res) => {
            console.log("respnse in getUnApprovedAnswer--> ", res)

            console.log("Only data--------->", res.data.data);


            this.setState({ data: res.data.data })



        }).catch((err) => {
            this.setState({ flag: true })
            console.log("error in list--> ", err)
        })
    }

    handleAnswers=()=>{
        this.props.history.push('/admindashboard')
    }

    render() {
        var ans = this.state.data.map(key => {
            return (
                <OneAnswer id={key.id} answer={key} />
            )
        })
        console.log("Answers are===>", ans);

        return (

            <div className="main">
                <div id="logbutton">
                    <Button
                        id="Button"
                        variant="contained"
                        color="primary"
                        onClick={this.handleAnswers}
                    >
                        Back
                    </Button>
                </div>
                {/* <div id="ans">
                       Answer
                   </div> */}
                {ans}
            </div>



        )
    }
}
export default Answers