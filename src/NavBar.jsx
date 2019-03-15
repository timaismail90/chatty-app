import React, {Component}from 'react'

export default class NavBar extends Component {

  render () {
    return (
     <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>

          <p className='NavBar'>{this.props.counter} users online</p>
        </nav>



    );
  }
}


