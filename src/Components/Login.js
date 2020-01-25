import React from 'react'
import TextField from "@material-ui/core/TextField"


const LoginPage = () => {
return (
    <div className="fieldContainer">
      <div className="textFieldContainer">
        <TextField id="username" label="Username" variant="filled" />
      </div>
      <div className="textFieldContainer">
        <TextField id="password" label="Password" variant="filled" />
      </div>
    </div> 
    )
}

export default LoginPage