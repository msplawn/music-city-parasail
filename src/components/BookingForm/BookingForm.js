import React from 'react'
import { Segment, Button, Checkbox, Form } from 'semantic-ui-react'


const BookingForm = () => (
    <Segment placeholder>
        <Form>
            <Form.Field>
                <label>First Name</label>
                <input placeholder='First Name' />
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' />
            </Form.Field>
            <Form.Field>
                DATE BOX
            </Form.Field>
            <Form.Field>
                Experience Box
            </Form.Field>
            <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
    </Segment>
)

export default BookingForm