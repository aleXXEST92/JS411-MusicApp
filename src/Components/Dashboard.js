import React, { Component } from "react" 
import Online from "./Online"
import Volume from './Volume'
import Quality from "./Quality"


class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isNotifs: [],
            isOnline: true,
            qualityArr: [],
            lowQuality: false
        }
    }



onlineChangeHandler = () => {
  
    //setState for isOnline to be the opposite of its original state
    //if state is false 
    //define isNotifs, make a copy of state
    //push message onto isNotifs array
    //setState for isNotifs to allow changes to happen 


    this.setState({
        isOnline: !this.state.isOnline
    })
 
    if (this.state.isOnline === false) {
    
    let isNotifs = this.state.isNotifs

    isNotifs.push("Your application is offline. You won't be able to share or stream music to other devices.")
    console.log(isNotifs)
    
    this.setState({
        isNotifs: this.state.isNotifs
    })
    }
}

lowQualityHandler = () => {

this.setState({
    lowQuality: !this.state.lowQuality
}) 

if(this.state.lowQuality === true) {

    let qualityArr = this.state.qualityArr

    qualityArr.push("Music quality is degraded. Increase quality if your connection allows it.")
    console.log(qualityArr)

}
}

    render () {
    return (
        <div>
        <Online onlineChangeHandler={this.onlineChangeHandler}/>
        <Volume/>
        <Quality 
        lowQuality={this.state.lowQuality} 
        lowQualityHandler={this.lowQualityHandler}/> 
        <h1>System Notifications</h1>
        <div>
        {this.state.isOnline && this.state.isNotifs.map((item, index) => (
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