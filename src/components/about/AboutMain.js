import React from 'react'
import './AboutMain.scss'

const About = () => {
  return (
    <div className='about__main'>
      <div>
        <h2>Who I Am</h2>
        <p>
          I'm a web designer and developer based in Nairobi, Kenya. During the
          day I’m the software developer at a local agency. During the evenings
          I spend my time working on freelance projects and building my own
          products.
        </p>
      </div>
      <div>
        <h2>From Start to Finish</h2>
        <p>
          From wireframes to design to code. I cover every step of the process
          in getting a website launched.
        </p>
        <button class='btn-inline'>
          See my process <span>&rarr;</span>
        </button>
      </div>
      <div>
        <h2>Why Work With Me</h2>
        <p>
          There’s nothing I enjoy more than designing and developing good
          websites for nice people. It really is that simple. I’ve spent many
          years trying to perfect what I do and while I’ll never be perfect, I
          do my best to come close. If you’ve got a project you’d like to work
          on with me just get in touch and we can get to work!
        </p>
      </div>
    </div>
  );
}

export default About
