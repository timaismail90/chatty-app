import React, {Component}from 'react'
import Message from './Message.jsx';

function Notification(prop) {
  return (
    <div>
      <div className="notification">
      <span className="notification-content">{prop.message.content}</span>
    </div>
    </div>)
}

export default class MessageList extends Component {
  render() {

    const message = this.props.messages.map((message) => {
      if (message.type === "incomingNotification"){
        return <Notification key={message.id}  message= {message}/>
      }
      else if (message.type === "incomingMessage") {
        return <Message key={message.id}  message= {message}/>
      }
    });

    return(
      <main className="messages">{message} </main>
    )
  }
}

