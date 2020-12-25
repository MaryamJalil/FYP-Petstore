import React, { Component } from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';
import {FaStar} from "react-icons/fa";


export default class HospitalLocation extends Component {
    render() {
        return (
            <div>
                
<div style={{marginLeft:'45px', marginTop:'50px'}}>
<Card style={{ width: '61rem' , marginLeft:'25px'}}>



<Card.Body>
<Card.Title>Paws N Claws Pets Clinic Islamabad</Card.Title>

<>
  <Button variant="primary">Website</Button>{' '}
  <Button variant="secondary">Direction</Button>{' '}
  <Button variant="success">Save</Button>{' '}
  <Button variant="warning">Call</Button>{' '}


</>
<br/>
<FaStar className="star" size={20}/>
<FaStar className="star" size={20}/>
<FaStar className="star" size={20}/>
<FaStar className="star" size={20}/>
<FaStar className="star" size={20}/>


<Card.Text>
Animal hospital in Islamabad
</Card.Text>
</Card.Body>
<ListGroup className="list-group-flush">
<ListGroupItem>Address: # 1, Pakeeza Market Street، I-8/4 I 8/4 I-8, Islamabad, Islamabad Capital Territory 44000
</ListGroupItem>
<ListGroupItem>Hours: Closed ⋅ Opens 10AM Mon

</ListGroupItem>
<ListGroupItem>Phone: 0332 8888788
</ListGroupItem>

</ListGroup>

<Card.Body>
<Card.Text style={{fontWeight:'bold'}}>
Feedback
</Card.Text>
</Card.Body>
<ListGroupItem>
Samantha Sigmon, January 2018
<FaStar className="star" size={20}/>
<FaStar className="star" size={20}/>
<FaStar className="star" size={20}/>
<FaStar className="star" size={20}/>
<FaStar className="star" size={20}/>

</ListGroupItem>

<ListGroupItem>
My dog means the world to me and it’s so relieving and refreshing to see a place that cares and is so knowledgeable.
 Dr. Watson and her team is amazing! Chloe had a slight allergic reaction to her vaccines and everyone made the process as less 
 painful as possible, thank you!


</ListGroupItem>



</Card>
</div>
            </div>
        )
    }
}
