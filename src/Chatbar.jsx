import React from 'react'

class chatbar extends React.Component {
  render () {
    return (
    <form className="chatbar-username">
      <input footer="chatbar-username" placeholder="Your Name (Optional)" />
      <input footer="chatbar-message" placeholder="Type a message and hit ENTER" />
    </form>
    )
  }
}

export default chatbar



