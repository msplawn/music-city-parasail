import React from 'react'
import { Button, Header, Icon, Segment } from 'semantic-ui-react'


const LandingInfo = () => (
  <Segment placeholder>
    <Header icon>
      <Icon name='pdf file outline' />
      Music City Parasail
    </Header>
    <Segment >
        Music City Parasail is the premiere destination for parasailing and jetski experiences in Nashville! We offer 15 and 30 minute parasailing experiences as well as jetski rentals to enjoy on beautiful Percy Priest Lake.
    </Segment>
    <Button primary>Book an experience!</Button>
  </Segment>
)


export default LandingInfo