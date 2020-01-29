import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import Login from './Components/Login'
import Button from "@material-ui/core/Button"
import Dashboard from './Components/Dashboard'

class App extends Component {
  constructor(props){
  super(props)

  this.state = {
    isLoggedIn: true
  }
  }

  loggedIn = () => {
    this.setState({
      isLoggedIn: false
    })
  }


  render () {
    if (this.state.isLoggedIn) {
      return (
        <div>
          <NavBar/>
          <main>
            <Login />
            <Button onClick={this.loggedIn} variant="contained" color="primary">Log In</Button>
          </main>
        </div>
      ); 
    } else {
      return (
        <div>
          <NavBar/>
          <main>
            <Dashboard />
          </main>
        </div>
      ); 
    }
  } 
}

export default App;
