import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import Chatbar from './Chatbar.jsx';
import Message from './Message.jsx';

const URL = 'ws://localhost:3001'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: []
    }
  }

ws = new WebSocket(URL)

  componentDidMount() {
    this.ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log('connected to server')
    }

    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
    }, 3000);


    this.ws.onclose = () => {
      console.log('disconnected')
      // automatically try to reconnect on connection loss
      this.setState({
        ws: new WebSocket(URL),
      })
    }

        // Listen for messages
    this.ws.addEventListener('message', (event) => {
      let message = JSON.parse(event.data)
      // this.setState({ messages: message.data })
      this.setState({messages: [...this.state.messages,message]})
      console.log(this.state.messages)

        })
      }


    handleChange =(event) => {
      console.log("validate", event.target.previousSibling )
   //   onKeyPress= (e) => {
        if (event.key === 'Enter') {
          let message = { username : event.target.previousSibling.value , content : event.target.value };
          console.log(message)
          this.ws.send(JSON.stringify(message));
          event.target.value = ""
        }
    }
    render() {
      return (
        <div className= "App">
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>

        <MessageList messages={this.state.messages}/>
        <Chatbar username={this.state.currentUser.name} handleChange={this.handleChange}/>
      </div>

    );
   }
}


export default App;

