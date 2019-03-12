import React, {Component}from 'react'
import Message from './Message.jsx';

export default class MessageList extends Component {
 render(){
    return (
      <div>
      <footer className="message">
        <span className="message-username">{this.props.username}</span>
        <span className="message-content">{this.props.content}</span>
      </footer>
      </div>
    )
  }
}



