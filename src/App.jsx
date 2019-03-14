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

    this.ws.onclose = () => {
      console.log('disconnected')
      // automatically try to reconnect on connection loss
      // this.setState({
      //   ws: new WebSocket(URL),
      // })
    }

        // Listen for messages
    this.ws.addEventListener('message', (event) => {
      let message = JSON.parse(event.data)
      console.log(event.data, "this message from server//")
      this.setState({messages: [...this.state.messages,message]})
      console.log(this.state.messages)

        })
      }

      // change User handle
      changeUser = (event) =>{
        const oldUser = this.state.currentUser.name
        const newUser = event.target.value
        this.setState({currentUser:{name:newUser}})

          if (newUser !== oldUser) {
            const newNotification = {
             type:"postNotification",
           content: `${oldUser} has chaged their name to ${newUser}`
        }
        console.log(newNotification, "newNotification testing")
        this.ws.send(JSON.stringify(newNotification));


          }
      }


    handleChange =(event) => {
      console.log("validate", event.target.previousSibling )
   //   onKeyPress= (e) => {
        if (event.key === 'Enter') {
          let messages = this.state.messages
          const newUser =  event.target.value
          const newUserName = {name:newUser}
          const newMessage = {
            type: "postMessage",
            username: this.state.currentUser.name,
            content: event.target.value
          }
          // { username : event.target.previousSibling.value , content : event.target.value };

          // this.setState({currentUser:username})

          // console.log(message)
          this.ws.send(JSON.stringify(newMessage));
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
        <Chatbar username={this.state.currentUser.name} changeUser= {this.changeUser} handleChange={this.handleChange}/>
      </div>

    );
   }
}


export default App;

