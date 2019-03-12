import React from 'react'
import Message from './Message.jsx';

class MessageList extends React.Component {
  constructor(props){
    super(props)
    console.log('PROPS: ', this.props);

  }

  render () {
    return (
      <div className="messages">
        {
          this.props.messages.map((message, index) => {
            // console.log(index)
            return (
                <div key={index}> {message.text} </div>
              )
          })
        }
        <Message/>
      </div>
    )
  }
}

export default MessageList

