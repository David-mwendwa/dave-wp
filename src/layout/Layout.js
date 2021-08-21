import React, { Component } from 'react';
//import AboutMain from '../components/about/AboutMain';
import profile from '../images/proofile.jpg';

import './Layout.scss';

class Layout extends Component {
  render() {
    return (
      <div className='container'>
        <div className='navbar'>Navbar</div>
        <div className='header'>Header</div>
        <div className='header-side'>Side</div>

        <div className='features__section'>
          <h1 className='features__title'>What I Do</h1>
          <div className='services'>
            <div className='service'>
              <i className='fas fa-globe service-icon'></i>
              <h2 className='service-title'>Focused on UX</h2>
              <p className='service-text'>
                We believe a website is like a personality, no two can be the
                same and no other business comes close to being you even if they
                tried.
              </p>
            </div>
            <div className='service'>
              <i className='fas fa-paint-brush service-icon'></i>
              <h2 className='service-title'>Fully responsive</h2>
              <p className='service-text'>
                Potential customers will find your business across a variety of
                devices. Whether it’s a smartphone, tablet or desktop.
              </p>
            </div>
            <div className='service'>
              <i className='fas fa-chart-line service-icon'></i>
              <h2 className='service-title'>Optimized</h2>
              <p className='service-text'>
                Best practice SEO techniques and architecture will be used
                during the build to set the foundation for optimal results.
              </p>
            </div>
          </div>
        </div>

        <div className='about__sidebar'>
          <img src={profile} alt='profile' />
          <h2>David Mwendwa</h2>
          <h3>Full-Stack Software Engineer</h3>
          <div className='social__icons'>
            <i class='fab fa-github-square'></i>
            <i class='fab fa-twitter-square'></i>
            <i class='fab fa-github-square'></i>
            <i class='fab fa-facebook-square'></i>
          </div>
        </div>
        <div className='about__main'>
          <div>
            <h2>Who I Am</h2>
            <p>
              I'm a web designer and developer based in Nairobi, Kenya. During
              the day I’m the software developer at a local agency. During the
              evenings I spend my time working on freelance projects and
              building my own products.
            </p>
          </div>
          <div>
            <h2>From Start to Finish</h2>
            <p>
              From wireframes to design to code. I cover every step of the
              process in getting a website launched.
            </p>
            <button class='btn-inline'>
              See my process <span>&rarr;</span>
            </button>
          </div>
          <div>
            <h2>Why Work With Me</h2>
            <p>
              There’s nothing I enjoy more than designing and developing good
              websites for nice people. It really is that simple. I’ve spent
              many years trying to perfect what I do and while I’ll never be
              perfect, I do my best to come close. If you’ve got a project you’d
              like to work on with me just get in touch and we can get to work!
            </p>
          </div>
        </div>

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

export default Layout;
