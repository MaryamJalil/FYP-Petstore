import React, { Component } from 'react';
import Toast from 'react-bootstrap/Toast';
import Card from 'react-bootstrap/Card';


import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


export default class Notifications extends Component {
    render() {
        return (

            <div style={{marginTop:"30px"}} >
                                    <Row>
                                        <Col >

                <div style={{marginLeft:'45px'}}>
                <Card style={{ width: '35rem',padding:"20px" ,marginBottom:"30px",backgroundColor:"#ffc6ff"}}>
                <Card.Title>Feedback</Card.Title>

    
  <Toast style={{backgroundColor:"#ffc6ff"}}>
    <Toast.Header>
      <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
      <strong className="mr-auto">Knex</strong>
      <small>just now</small>
    </Toast.Header>
    <Toast.Body>I really want to know what's in these things, because of all the treats my 6-year old Poms have ever had, these are by
       far the ones they would literally kill me to get. </Toast.Body>
  </Toast>
  <Toast style={{backgroundColor:"#ffc6ff"}}>
    <Toast.Header>
      <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
      <strong className="mr-auto">Ring-Wraith</strong>
      <small>2 seconds ago</small>
    </Toast.Header>
    <Toast.Body>My dog is has been eating a one a day for the last 7 years of his life, which I figure is a total of 2,500 Greenies. Well you're probably thinking if I've bought that many then they must be great, right? Wrong! My dog absolutely loves the taste of them and has come to expect one every morning after he does his business. From what I can tell the treats are perfectly healthy and don't do him any harm,
       so he continues to get them. That's about as far as all of the positives go. </Toast.Body>
  </Toast>
  <Toast style={{backgroundColor:"#ffc6ff"}}>
    <Toast.Header>
      <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
      <strong className="mr-auto">	Pat Fifield </strong>
      <small>just now</small>
    </Toast.Header>
    <Toast.Body>Apollo LOVES these! At our last vet check-up, the vet said that Apollo's teeth and gums were exceptionally healthy. 
      Although he's a Great Pyrenees, we give him these TEENIE Treats 
      throughout the day, and he enjoys them every single time, without expanding his 'waist.'</Toast.Body>
  </Toast>  <Toast style={{backgroundColor:"#ffc6ff"}}>
    <Toast.Header>
      <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
      <strong className="mr-auto">Patty</strong>
      <small>just now</small>
    </Toast.Header>
    <Toast.Body>It occurred to me a few weeks ago that my little diva Yorkie's breath stunk. Doggy kisses weren't very pleasant. 
      I tried to brush her teeth but that was like trying to give a cat a bath. She's skittish. Her teeth aren't bad though. It must be the food she is eating that causes doggy breath. We were at my sister's house when she offered Molly a Greenie treat that she gives her own dog (who is my dog's sister. Cute, eh?). Molly ate it right up to my shock. 
      She is picky about what snacks she will eat and usually sticks to bacon flavored chewy things.</Toast.Body>
  </Toast>  <Toast style={{backgroundColor:"#ffc6ff"}}>
    <Toast.Header>
      <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
      <strong className="mr-auto">Elsa</strong>
      <small>just now</small>
    </Toast.Header>
    <Toast.Body>I have six little dogs. I gave these to them and
2 of the dogs that ate them. Got very sick.
The others got diarrhea I had to go to the vet with the chihuahua. From what the vet
Stated he thinks it might have been the greenie. She finally pooped a 
little bit and there were pieces of undigested I Greenie it cost me a large bill. She needed X-rays and blood work</Toast.Body>
  </Toast>
  
  
</Card>
                </div>
                </Col>
                <Col>



                <div
  aria-live="polite"
  aria-atomic="true"
  style={{
    position: 'relative',
    minHeight: '200px',
  }}
>
  <div
    style={{
      position: 'absolute',
      top: 0,
      right: 0,
    }}
  >
    <Toast style={{backgroundColor:"#ffc6ff"}}>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto">Order1</strong>
        <small>just now</small>
      </Toast.Header>
      <Toast.Body>Y YHY Cat Bowl</Toast.Body>
    </Toast>
    <Toast style={{backgroundColor:"#ffc6ff"}}> 
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto">Order2</strong>
        <small>2 seconds ago</small>
      </Toast.Header>
      <Toast.Body>Smart Interactive Cat Toy</Toast.Body>
    </Toast>
    <Toast style={{backgroundColor:"#ffc6ff"}}>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto">Order3</strong>
        <small>2 seconds ago</small>
      </Toast.Header>
      <Toast.Body>Raised Cat Bowls Elevated Stainless Steel Cat Bowls</Toast.Body>
    </Toast>
     <Toast style={{backgroundColor:"#ffc6ff"}}>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto">Order4</strong>
        <small>2 seconds ago</small>
      </Toast.Header>
      <Toast.Body>IAMS PROACTIVE HEALTH Minichunks Dry Dog Food, Chicken</Toast.Body>
    </Toast> 
    <Toast style={{backgroundColor:"#ffc6ff"}}>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto">Order5</strong>
        <small>2 seconds ago</small>
      </Toast.Header>
      <Toast.Body>Kitty Yarn Puffs Woolen Yarn Cat Toy</Toast.Body>
    </Toast> 
    <Toast style={{backgroundColor:"#ffc6ff"}}>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto">Order6</strong>
        <small>2 seconds ago</small>
      </Toast.Header>
      <Toast.Body>Enchanted Home Pet Quicksilver Sofa Dog Bed in Gray</Toast.Body>
    </Toast>
  </div>
</div>
</Col>
</Row>

                
            </div>
            
        )
    }
}
