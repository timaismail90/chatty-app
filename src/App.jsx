import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import Chatbar from './Chatbar.jsx';
import Message from './Message.jsx';

class App extends Component {
  render() {
    return (
      <div className= "App">
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <Message/>
        <MessageList/>
        <Chatbar/>

      </div>

    );
  }
}


export default App;

