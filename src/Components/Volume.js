import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';


export default class Volume extends Component {

render () {
  return (
    <div className='wrap'>
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Master Volume
        </Typography>
      </CardContent>
      <CardActions>
      <Slider className='Slider'
        defaultValue={30}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={100}
      />
      </CardActions>
    </Card>
    </div>
  );
 }
}