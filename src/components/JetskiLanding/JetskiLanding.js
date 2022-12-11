import React from 'react'
import { Button, Header, Icon, Segment } from 'semantic-ui-react'
import './jetski-landing.css';
import jetski from './assets/jetski.svg'


const JetskiLanding = () => (
  <div id="jetski-landing" placeholder>
    <Header id="header" icon>
      {/* <Icon id='icon' name='pdf file outline' /> */}
      <object className='jetski-icon' type="image/svg+xml" data={jetski}>svg-animation</object>
      <div id='title'>
        Jetskiing Experiences
      </div>
    </Header>
    {/* <Segment > */}
    <div className='para'>
      Be Kenny Powers from Eastbound and Down! Pull yo titties out. You on a jetski who care
    </div>
    {/* </Segment> */}
    <Button id="book-button" primary>Book an experience!</Button>
  </div>
)

export default JetskiLanding