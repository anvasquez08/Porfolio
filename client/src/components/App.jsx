import React from 'react';
import Nav from './Nav.jsx'
import About from './About.jsx'
import Footer from './Footer.jsx'
import Applications from './Applications.jsx'
import Resume from './Resume.jsx'
import { Switch, Route } from 'react-router-dom'

const App = () => (
  <div className='site-container'>
    <Nav/>
      <main>
        <Switch>
          <Route exact path='/' component={About}/>
          <Route exact path='/applications' component={Applications}/>
          <Route exact path='/resume' component={Resume}/>  
        </Switch>
      </main>
    <Footer/>
  </div>
)

export default App;