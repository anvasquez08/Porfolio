import React from 'react';
import { Container, Icon } from 'semantic-ui-react'
import BackgroundSlideshow from 'react-background-slideshow'

const food = 'https://images.unsplash.com/photo-1523905330026-b8bd1f5f320e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90a4f62a13955fd92b02cb3ae8c31b94&auto=format&fit=crop&w=1958&q=80'
const movies = 'https://images.unsplash.com/photo-1530432999454-016a47c78af3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=893d3ea88da5ee2fe9bc2d0c693686d9&auto=format&fit=crop&w=976&q=80'
const fashion = 'https://images.unsplash.com/photo-1517682165294-35e1ba483543?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7b0ae9c1fd963a117f0c869e69f91c56&auto=format&fit=crop&w=1950&q=80'

const About = () => (
  <div>
    <div className='biocontainer'>
      <div className='photoCarousel'>
        <BackgroundSlideshow images={[food, movies , fashion]}/>
      </div>
      <div className="biotext">
        <Container>
          <h1>HI! I’M ANA.</h1>
            <p>Born in Houston, Texas, raised in NYC, I'm a self-starting software engineer who loves a good cup of 
              coffee over a chat about some of our latest "aha" debugging moments.
            </p>
            <p>While in college, a PR internship spiraled into a career where I had the chance to work with
              some of my favorite brands. From Pantene to Johnnie Walker,
              I fell in love with the creativity and collaboration of planning media strategies.
            </p> 
            <p>After 5 years of great adventures, I fell in love with coding, specifically Javascript.
              I was determined to learned. Today, after a whirlwind change from PR girl to coding girl,
              I'm happy to use my skills to do what I love most- code, connect and create!</p> 
        </Container>
      </div>
    </div>

    <div className="quote">
      <h4 className='title'>SKILLS AT A GLANCE <Icon name='check' circle outlinesize='big'/></h4>
      <div className="wrap">  
        <div className='icons'>
          <Icon name='js'  size='big'/>
          <Icon name='react'  size='big' />
          <Icon name='node'  size='big' />
        </div>
        <div>
          <h5 className='skills'>FRONT-END:</h5>
            <p className='skills'>HTML5</p> 
            <p className='skills'>CSS3</p> 
            <p className='skills'>Redux</p> 
            <p className='skills'>Angular</p> 
            <p className='skills'>JQuery</p> 
            <p className='skills'>Apollo Client</p> 
        </div>
        <div>
          <h5 className='skills'>BACK-END:</h5>
            <p className='skills'>Express</p> 
            <p className='skills'>Socket.IO</p> 
            <p className='skills'>GraphQL</p> 
            <p className='skills'>MySQL</p> 
            <p className='skills'>PostgreSQL</p> 
            <p className='skills'>MongoDB</p> 
            <p className='skills'>Sequelize</p> 
            <p className='skills'>Mongoose</p> 
        </div>
        <div>
          <h5 className='skills'>TESTING/ DEPLOYMENT:</h5>
            <p className='skills'>Mocha</p> 
            <p className='skills'>Chai</p> 
            <p className='skills'>AWS Services</p> 
            <p className='skills'>Heroku</p> 
        </div>
      </div>  
    </div>
  </div>
)

export default About;