import React,{ Component }  from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import logo from './logo.svg';
import Admin from './Components/Admin'
import AdminDashboard from './Components/AdminDashboard'
import Answers from './Components/Answers'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Router>
           <Route path="/admin" exact component={Admin} />
            <Route path="/admindashboard" component={AdminDashboard} />
            <Route path="/dashboard/answers" component={Answers} />
          </Router>
      </div>
    );
  }
  
}

export default App;
