import React from 'react'

class chatbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser:this.props.currentUser
    }
  }
  render () {
    return (
      <form>
        <label></label>
        <input type="text" placeholder="Your Name (Optional)" />
        {this.props.currentUser}

        <label></label>
        <input type="text" placeholder="Type a message and hit ENTER" />

      </form>
    );
  }
}



export default chatbar



{/*<form className="chatbar-username">
      <input className="chatbar-username" placeholder="Your Name (Optional)" />
      <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
    </form>*/}