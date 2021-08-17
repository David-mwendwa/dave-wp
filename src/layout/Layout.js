import React, { Component } from 'react'

import './Layout.scss'

class Layout extends Component {
  render() {
    return (
      <div className='container'>
        <div className='navbar'>Navbar</div>
        <div className='header'>Header</div>
        <div className='header-side'>Side</div>
        <div className='features'>features</div>
        <div className='about__pictures'>about pictures</div>
        <div className='about__content'>about content</div>
        <div className='projects'>
          <div>Project one</div>
          <div>Project 2</div>
          <div>Project 3</div>
          <div>Project 4</div>
          <div>Project 5</div>
          <div>Project 6</div>
        </div>
        <div className='contacts'>Contacts</div>
        <div className='footer'>Footer</div>
      </div>
    );
  }
}

export default Layout
