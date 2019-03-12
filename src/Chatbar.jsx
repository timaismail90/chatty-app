import React, {Component}from 'react'

export default class Chatbar extends Component {

  render () {
    return (
    <div
      className="chatbar">
        <input className="chatbar-username" placeholder={this.props.username}/>
        <input onKeyPress={this.props.handleChange} className="chatbar-message" placeholder="Type a message and hit ENTER" />


    </div>


    );
  }
}


