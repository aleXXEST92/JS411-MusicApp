import React from 'react'
import TextField from "@material-ui/core/TextField"

const LoginPage = () => {
return (
    <div className="fieldContainer">
    <TextField id="filled-basic" label="One" variant="filled" />
    <div>divider</div>
    <TextField id="filled-basic" label="Two" variant="filled" />
  </div> 
    )
}

export default LoginPage