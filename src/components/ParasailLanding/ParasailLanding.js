import React from 'react'
import { Button, Header, Icon, Segment } from 'semantic-ui-react'
import './ParasailLanding.css'

const ParasailLanding = () => (
  <Segment placeholder>
    <Header id="parasail">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M383.5 192c.3-5.3 .5-10.6 .5-16c0-51-15.9-96-40.2-127.6C319.5 16.9 288.2 0 256 0s-63.5 16.9-87.8 48.4C143.9 80 128 125 128 176c0 5.4 .2 10.7 .5 16H240V320H208c-7 0-13.7 1.5-19.7 4.2L68.2 192H96.5c-.3-5.3-.5-10.6-.5-16c0-64 22.2-121.2 57.1-159.3C62 49.3 18.6 122.6 4.2 173.6C1.5 183.1 9 192 18.9 192h6L165.2 346.3c-3.3 6.5-5.2 13.9-5.2 21.7v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V368c0-7.8-1.9-15.2-5.2-21.7L487.1 192h6c9.9 0 17.4-8.9 14.7-18.4C493.4 122.6 450 49.3 358.9 16.7C393.8 54.8 416 112.1 416 176c0 5.4-.2 10.7-.5 16h28.3L323.7 324.2c-6-2.7-12.7-4.2-19.7-4.2H272V192H383.5z"/></svg>
    </Header>
    <Segment >
        Sail 100 feet above beautiful Percy Priest Lake! Everything looks better when you're that high. You can pee on the people in the boat for an extra $30.
    </Segment>
    <Button primary>Book an experience!</Button>
  </Segment>
)


export default ParasailLanding