import React, { Component, useState, useEffect } from 'react';
import './AdminDashboard.css'
import UserList from '../Components/UserList'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { getAdminList } from '../services/userService'
import { getBasicAdvanceCount } from '../services/userService'
import Pagination from "react-js-pagination";

// require("bootstrap/less/bootstrap.less");




class AdminDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {

      data: [],

      basic_count: "",
      advance_count: "",
      // activePage: 1,
      // posts: [],
      // setPosts: [],
      // loading: false,
      // setLoading: false,
      currentPage: 1,
      setCurrentPage: 1,
      postsPerPage: 10,
      currentPosts: [],
      arr: []
    }
  }




  async componentDidMount() {

    console.log("didMount");

    await this.getusers()

    this.usrStatics()

    // this.changeState()

    await this.onlyten(this.state.currentPage)

  }


  // changeState() {


  //   const fetchPosts = () => {

  //     this.setState({ setLoading: true });
  //     console.log("Data:", this.state.data);

  //     this.setState({ setPosts: this.state.data });
  //     this.setState({ setLoading: false });
  //   };

  //   fetchPosts();

  //   console.log("Posts are--->", this.state.setPosts);

  // }


  getusers = async () => {

    await getAdminList().then((res) => {
      console.log("respnse in login--> ", res)

      console.log("Only data--------->", res.data.data.data);


      this.setState({ data: res.data.data.data })



    }).catch((err) => {
      this.setState({ flag: true })
      console.log("error in list--> ", err)
    })

  }

  usrStatics = () => {
    getBasicAdvanceCount().then((res) => {
      console.log("respnse count in dashboard--> ", res)

      console.log("Only data--------->", res.data.data.details[0].count);


      this.setState({ basic_count: res.data.data.details[0].count })
      this.setState({ advance_count: res.data.data.details[1].count })



      console.log("Basic count------>", this.state.basic_count);
      console.log("Advance count--------->", this.state.advance_count);




    }).catch((err) => {
      // this.setState({ flag: true })
      console.log("error in login--> ", err)
    })

  }

  //Get current posts
  onlyten = async () => {
    console.log("Current page", this.state.currentPage);

    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    var CurrentPosts = this.state.data.slice(indexOfFirstPost, indexOfLastPost);
    //  this.setState({currentPosts :CurrentPosts})
    console.log("Current posts are---->", CurrentPosts);
    // var array = []
    // array.push(CurrentPosts)

    // console.log("array list..",array);

    await this.setState({
      currentPosts: CurrentPosts
    })



    //  this.setState({currentPage:pageNumber});


  }

  // Change page

  //  componentWillUpdate(){
  //   this.onlyten()
  //  }

  handlePageChange = async (pageNumber) => {
    console.log(`active page is--->`, pageNumber);
    await this.setState({
      currentPage: pageNumber

    })
    console.log(`active page is`, this.state.currentPage);
    this.onlyten(this.state.currentPage)
  }

  handleLogOutSubmit = () => {


    // this.setRedirect();
    localStorage.clear();
    var path = '/admin'
    this.props.history.push(path)
  }

  handleAnswers=()=>{
    this.props.history.push('/dashboard/answers')
  }


  render() {

    // var arr = []
    // this.setState({arr:this.state.currentPosts})
    // console.log("Type of=",typeof(this.state.currentPosts));

    // console.log("array list in render ..fdghhdd",arr.firstName);


    var mapUserResult = this.state.currentPosts.map(item => {
      // console.log("items",item.firstName);

      // return (

      //     item.firstName + " " + item.lastName + " " + item.email + " " + item.service+ " "
      // );

      return (

        <UserList firstNameItem={item.firstName} lastNameItem={item.lastName} emailItem={item.email} serviceItem={item.service} />

      );
      // this.onlyten()
    })



    return (
      <div className="maindiv5">
        <AppBar id="header">

          <div id="firstdiv">
            <div>
              <Typography id="fundoo1" variant="h6" color="inherit" noWrap>
                <label id="flabel">F</label>
                <label id="ulabel">u</label>
                <label id="nlabel">n</label>
                <label id="dlabel">d</label>
                <label id="olabel">o</label>
                <label id="o2label">o</label>
              </Typography>
            </div>

            <div>
              <Typography id="textAdmin" variant="h6" color="inherit" noWrap>
                Admin Panel
                  </Typography>
            </div>

            <div id="logbutton">
              <Button
                id="logoutButton"
                variant="contained"
                color="primary"
                onClick={this.handleAnswers}
              >
              Show UnApproved Answers
                    </Button>
            </div>

            <div id="logbutton">
              <Button
                id="logoutButton"
                variant="contained"
                color="primary"
                onClick={this.handleLogOutSubmit}
              >
                Logout
                    </Button>
            </div>
          </div>

        </AppBar>


        <div className="mainbody">

          <div id="basic_advance">
            <div id="basic">
              <div id="basictext">
                <Typography id="textAdmin" variant="h6" color="inherit" noWrap>
                  Basic
                  </Typography>
              </div>
              <div>
                {this.state.basic_count}
              </div>
            </div>
            <div id="advance">
              <div id="advancetext">
                <Typography id="textAdmin" variant="h6" color="inherit" noWrap>
                  Advance
                  </Typography>
              </div>
              <div>
                {this.state.advance_count}
              </div>
            </div>
          </div>

          <div>

            <div id="maindata">
              <div className="data1">

                <div>FirstName</div> <div id="lastnamediv">LastName</div> <div>Email</div> <div>Service</div>
              </div>
              <div>


                {mapUserResult}
              </div>
              <div  >
                <div id="paginate" >
                  <Pagination
                    activePage={this.state.currentPage}
                    itemsCountPerPage={this.state.postsPerPage}
                    totalItemsCount={this.state.data.length}
                    pageRangeDisplayed={10}
                    onChange={this.handlePageChange}
                  />
                </div>
              </div>
         
            </div>


          </div>



        </div>
    
      </div>

    );
  }

}

export default AdminDashboard;