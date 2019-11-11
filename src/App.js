import React,{ Component }  from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import logo from './logo.svg';
import Admin from './Components/Admin'
import AdminDashboard from './Components/AdminDashboard'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Router>
           <Route path="/admin" exact component={Admin} />
            <Route path="/admindashboard" component={AdminDashboard} />
          </Router>
      </div>
    );
  }
  
}

export default App;
