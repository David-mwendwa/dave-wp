import React, { Component } from 'react'

import './Layout.scss'

class Layout extends Component {
  render() {
    return (
      <div className="container">
        <div className='header'>Header</div>
        <div className='header-side'>Side</div>
        <div className='features'>features</div>
        <div className='about__pictures'>about pictures</div>
        <div className='about__content'>about content</div>
        <div className='projects'>Projects</div>
        <div className='contacts'>Contacts</div>
        <div className='footer'>Footer</div>
      </div>
    );
  }
}

export default Layout
