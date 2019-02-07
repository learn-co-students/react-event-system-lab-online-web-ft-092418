// Code Keypad Component Here
import React, {Component} from "react"

class KeyPad extends Component {

  myListener = () => {
    console.log("Entering password...")
  }


  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.myListener}/>
      </div>
  )}
}

export default KeyPad
