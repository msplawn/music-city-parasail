import React from 'react';
import { Button, Header, Icon } from 'semantic-ui-react';
import './landing.css';


const LandingInfo = () => (
  <div id="landing" className="segment" placeholder>
    <Header id="header" icon>
      <Icon id="icon" name='pdf file outline' />
      <div id="title">
        Music City Parasail
      </div>
    </Header>
    {/* <Segment > */}
    <div className='para'>
      Music City Parasail is the premiere destination for parasailing and jetski experiences in Nashville! We offer 15 and 30 minute parasailing experiences as well as jetski rentals to enjoy on beautiful Percy Priest Lake.
    </div>
    {/* </Segment> */}
    <Button id="book-button" primary>Book an experience!</Button>
  </div>
)


export default LandingInfo