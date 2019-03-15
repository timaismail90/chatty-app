import React, {Component}from 'react'

export default class Chatbar extends Component {

  render () {
    return (
      <div
      className="chatbar">
      <input  onBlur= {this.props.changeUser} className="chatbar-username" placeholder={this.props.currentUser}/>
      <input onKeyPress={this.props.handleChange} className="chatbar-message" placeholder="Type a message and hit ENTER" />
      </div>
    );
  }
}


