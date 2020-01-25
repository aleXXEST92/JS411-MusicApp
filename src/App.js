import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import TextField from '@material-ui/core/TextField'

class App extends Component {
  constructor(props){
  super(props)

  this.state = {
    isLoggedIn: true
  }
  }

  loggedIn = (e) => {
    this.setSate({
      isLoggedIn : false
    })
  }


  render () {
    if (this.state.isLoggedIn)

  return (
    <div>
      <NavBar/>
      <TextField />
      <button>Log In</button>
    </div>
  );
}
}

export default App;
