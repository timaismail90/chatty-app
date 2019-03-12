import React, {Component}from 'react'

export default class Chatbar extends Component {
  render () {
    return (
    <div>
      <footer className="chatbar">
        <input className="chatbar-username" placeholder={this.props.username}/>
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
      </footer>
    </div>


    );
  }
}


