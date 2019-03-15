import React from 'react'

class Message extends React.Component {
  render () {
    return (
      <div className="message">
        <span className="message-username">{this.props.message.username}</span>
        <span className="message-content">{this.props.message.content}</span>
        <span className="message-counter">{this.props.message.countere}</span>
      </div>
  )}
}

export default Message