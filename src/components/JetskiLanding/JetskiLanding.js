import React from 'react'
import { Button, Header, Icon, Segment } from 'semantic-ui-react'
import './jetski-landing.css';


const JetskiLanding = () => (
  <Segment id="jetski-landing" placeholder>
    <Header id="header" icon>
      <Icon name='pdf file outline' />
      Jetskiing Experiences
    </Header>
    {/* <Segment > */}
        Be Kenny Powers from Eastbound and Down! Pull yo titties out. You on a jetski who care
    {/* </Segment> */}
    <Button primary>Book an experience!</Button>
  </Segment>
)


export default JetskiLanding