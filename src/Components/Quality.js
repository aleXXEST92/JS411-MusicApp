import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


import Typography from '@material-ui/core/Typography';


export default function Quality (props) {

const [quality, setQuality] = React.useState('');

isQualityHandler = (event) => {
  setQuality:(event.target.value);
  props.onQualChange

  
  }
  }



render () {
  return (
    <div className='wrap'>
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Sound Quality
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Manually control the music quality in event of poor connection 
        </Typography>
      </CardContent>
      <CardActions className="QualityCard">
      <FormControl className='Dropdown'>
        <InputLabel id="demo-simple-select-label">Sound Quality</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        >
          <MenuItem value={10}>Low</MenuItem>
          <MenuItem value={20}>Normal</MenuItem>
          <MenuItem value={30}>High</MenuItem>
        </Select>
      </FormControl>
      </CardActions>
    </Card>
    </div>
  );
 }
}
