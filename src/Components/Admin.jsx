import React, { Component } from 'react'
import './Admin.css'
import { admin } from '../services/userService'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import Snackbar from '@material-ui/core/Snackbar';


const theme = createMuiTheme({
    overrides: {
        MuiButton: {
            root: {
                textTransform: "lowercase"
            }

        }
    }

});


class Admin extends Component {

    constructor(props) {
        super(props);

        this.state = {

            email: "",
            password: "",
            emailError: "",
            passwordError: "",
            flag: false

        }
    }


    handlechangeall = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    validateEmail(email) {
        // var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var re = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
        return re.test(email);
    }

    validate = () => {
        let isError = false;

        const errors = {
            emailError: "",
            passwordError: ""
        };

        // if (!this.state.email.includes("@")) {
        //     isError = true;
        //     errors.emailError = "Requires valid email";
        // }

        if (!this.validateEmail(this.state.email)) {
            isError = true;
            errors.emailError = "Requires valid email";
        }

        if ((this.state.password.length < 6) || (this.state.password.length > 12)) {
            isError = true;

            errors.passwordError = "Password length should greater than 6 and less than 12";
        }

        this.setState({
            ...this.state,
            ...errors
        });

        console.log("In validate----->" + this.state);


        return isError;
    };

    handleloginSubmit = (event) => {

        event.preventDefault();
        this.validate()
        const err = this.validate();

        var loginData = {};
        loginData.email = this.state.email;
        loginData.password = this.state.password

        console.log("logindata--> ", JSON.stringify(loginData))



        admin(loginData).then((res) => {
            console.log("respnse in login--> ", res)

            console.log("****respnse in login token is--> ", res.data.id)
            // console.log("data of login user--->" + res.data.data.FirstName);


            if (res.data.id) {

                // console.log("Flag-------------->",this.state.flag);

                // alert("Login Successful-----");
                localStorage.setItem('AdminLoginToken', res.data.id);



                var path = '/admindashboard'
                this.props.history.push(path)
            }
            // else{
            //     if(res.data.message === "Ohhh Your Password not matched ")
            //     {
            //         alert("Password is incorrect");
            //     }
            //     else{
            //         alert("Email is not registerd")
            //     }
            // }


            // this.clearField();


        }).catch((err) => {
            this.setState({ flag: true })
            console.log("error in login--> ", err)
        })

        if (!err) {
            // clear form
            this.setState({
                email: "",
                emailError: "",
                password: "",
                passwordError: ""
            });
        }
    }

    handleCreateAccountClick = () => {
        console.log("createAccount button clicked..")
        var path = '/createAccount'
        this.props.history.push(path)
    }

    handleforgetPasswordSubmit = () => {
        console.log("forget password button clicked..")
        var path = '/forgetpassword'
        this.props.history.push(path)
    }

    handleClose = () => {
        console.log("Flag before", this.state.flag);

        this.setState({ flag: false })

        console.log("Flag after", this.state.flag);
    };

    render() {
        return (

            <div className="mainBody">

                <div className="adminMainDiv">

                    <div id="fundoo">

                        <label id="flabel">F</label>
                        <label id="ulabel">u</label>
                        <label id="nlabel">n</label>
                        <label id="dlabel">d</label>
                        <label id="olabel">o</label>
                        <label id="o2label">o</label>
                    </div>

                    <div>

                        <div id="login">Admin Login </div>
                        <div id="text">Use your Fundoo Account</div>

                    </div>

                    <div className="textfields">

                        <div className = "emailIdField">
                            <TextField
                                id="EmailPass"
                                label="Email Id"
                                type="email"
                                name="email"
                                value={this.state.email}
                                autoComplete="email"
                                margin="normal"
                                variant="outlined"
                                onChange={this.handlechangeall}
                                errorText={this.state.emailError}

                            />

                        </div>
                        <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.emailError}
                        </div>

                        <div>
                            <div>
                                <TextField
                                    id="EmailPass"
                                    label="Password"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    autoComplete="current-password"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handlechangeall}

                                />
                            </div>
                        </div>
                        <div>
                             <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.passwordError}
                            </div>
                           
                        </div>

                        <div>
                            <div>
                                <Button
                                    id="loginButton1"
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleloginSubmit}

                                >
                                    Login
                    </Button>
                            </div>
                            <div>
                                <Snackbar

                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    }}
                                    open={this.state.flag}
                                    autoHideDuration={6000}
                                    onClose={this.handleClose}

                                    message="Login Failed"


                                />
                            </div>

                        </div>

                    </div>

                </div>


            </div>
        )
    }



}
export default Admin