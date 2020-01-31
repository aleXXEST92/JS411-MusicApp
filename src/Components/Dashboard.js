import React, { Component } from "react" 
import Online from "./Online"
import Volume from './Volume'
import Quality from "./Quality"


class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            onlineArr: [],
            isOnline: true,
            isVolume: "",
            volumeArr: [],
            qualityArr: [],
            isQuality: false
           
        }
    }



onlineChangeHandler = () => {

    this.setState({
        isOnline: !this.state.isOnline
    })
 
    if (this.state.isOnline === false) {
    
    let onlineArr = this.state.onlineArr

    onlineArr.push("Your application is offline. You won't be able to share or stream music to other devices.")
    console.log(onlineArr)
    
    this.setState({
        onlineArr: this.state.onlineArr
    })
    }
}

qualityChangeHandler =(quality) => {
    if (quality === low) 
    let qualityArr = [...this.state.qualityArr]
    qualityArr.push("Listening to music at a high volume could cause long-term hearing loss.")
    this.setState({
       qualityArr: quallity 
    })
}

    render () {
    return (
        <div>
        <Online onlineChangeHandler={this.onlineChangeHandler}/>
        <Volume/>
        <Quality 
        onQualChange={this.qualityChangeHandler}
        /> 
        <h1>System Notifications</h1>
        <div>
        {this.state.isOnline && this.state.onlineArr.map((item, index) => (
        <p key={index}>{item}</p>
        ))}
         </div>
         <div>
            {this.state.lowQuality && this.state.qualityArr.map((item, index) => (
            <p key={index}>{item}</p>
            ))} 
         </div>
        </div>
    )
  }
}

export default Dashboard