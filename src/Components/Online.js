import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions'
import Switch from '@material-ui/core/Switch';


export default class Online extends Component {

render () {

  return (
    <div className='wrap'>
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Online Mode
        </Typography>
        <Typography color="textSecondary" gutterBottom>
        Is this application connected to the internet?
        </Typography>
      </CardContent> 
      <CardActions>
      <Switch onChange={() => this.props.onlineChangeHandler()} value="checkedC" color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} />
    </CardActions>
    </Card>
    </div>
  );
 }
}