import React from 'react';
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

const handleChange = event => {
setQuality(event.target.value);
props.onQualChange(event.target.value)
// console.log(event.target.value)
// console.log(quality)
};

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
          value={quality}
          onChange={handleChange}
        >
          <MenuItem value=""><em>none</em></MenuItem>
          <MenuItem value={1}>Low</MenuItem>
          <MenuItem value={2}>Normal</MenuItem>
          <MenuItem value={3}>High</MenuItem>
        </Select>
      </FormControl>
      </CardActions>
    </Card>
    </div>
  );
 }
