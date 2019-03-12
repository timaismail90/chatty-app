import React, {Component}from 'react'
import Message from './Message.jsx';

export default class MessageList extends Component {
 render(){
  return (
    <div>{this.props.messages.map((message, index) => {
    return <Message username={message.username} content={message.content} key={index}/>
    })}
    </div>
  );
}

}

