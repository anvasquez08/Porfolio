import React from 'react';
import { Icon } from 'semantic-ui-react'

const About = () => (
  <div className='footer'>
    <div className='footer text'>
      <h3 >Let's Chat <Icon name='handshake' outlinesize='big'/></h3>
            <a href='https://www.linkedin.com/in/ana-vasquez-47980634/'><Icon name='linkedin'  size='big' color='black'/></a>
            <Icon name='envelope outline'  size='big'/> anvasquez08@gmail.com
            <a href='https://github.com/anvasquez08'><Icon name='github'  size='big' color='black'/></a>
    </div>
  </div>
)

export default About