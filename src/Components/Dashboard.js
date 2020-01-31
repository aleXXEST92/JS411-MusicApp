import React, { Component } from "react" 
import Online from "./Online"
import Quality from "./Quality"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';


class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOnline: true,
            alertArr: [],
            volume: "",
            quality: ""
        }
    }

onlineChangeHandler = () => {

    this.setState({
        isOnline: !this.state.isOnline
    })
 
    if (this.state.isOnline === false) {
    
    let alertArr = this.state.alertArr

    alertArr.push("Your application is offline. You won't be able to share or stream music to other devices.")
    
    this.setState({
        alertArr: this.state.alertArr
    })
    }
}

volumeChangeHandler = (event, newValue) => {
  this.setState({
      event: newValue
  })

  if ( newValue === 80 || newValue > 80) {
    let alert = [...this.state.alertArr]
    alert.push("Listening to music at a high volume could cause long-term hearing loss.")
    this.setState ({
        alertArr: alert
    })
    }
}



qualityChangeHandler =(quality) => {
    if (quality === 1 ) {
    let alert = [...this.state.alertArr]
    alert.push("Music quality is degraded. Increase quality if your connection allows it.")
    this.setState({
       alertArr: alert 
    })
}}


    render () {
    return (
        <div>
        <Online onlineChangeHandler={this.onlineChangeHandler}/>
        
        <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Master Volume
        </Typography>
      </CardContent>
      <CardActions>
      <Slider className='Slider'
        onChange={this.volumeChangeHandler}
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

        <Quality 
        onQualChange={this.qualityChangeHandler}
        /> 
        <h1>System Notifications</h1>
        <div>
            {this.state.alertArr.map((item, index) => (
            <p key={index}>{item}</p>
        ))}
         </div>
        </div>
    )
  }
}

export default Dashboard