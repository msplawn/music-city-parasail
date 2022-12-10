import React from 'react';
import { Segment, Button, Checkbox, Form, Icon } from 'semantic-ui-react';
import './booking-form.css';

const BookingForm = () => (
    <div id='booking-main' placeholder>
        {/* <Form>
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
            <Button type='submit' className='submit'>Submit</Button>
        </Form> */}

        <div className='title-bkgd'>
            <text className='footer-title'>MUSIC CITY PARASAIL</text>
        </div>

        <div className='ig-div'>
            <Icon  name='instagram' className='ig' />
        </div>
        
        <div>musiccityparasail@gmail.com</div>
        <div>666 Surf St, Nashville TN 37011</div>
        <div>(615)555-4321 </div>
        <div className='smol'>If an erection lasts more than 4 hours, contact a physician immediately.</div>
    </div>
)

export default BookingForm