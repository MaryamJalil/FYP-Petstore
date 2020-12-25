import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import doc from '../img/doc.jpg';
import doc1 from '../img/doc1.jpg';
import doc2 from '../img/doc2.jpg';
import vaccine from '../img/vaccine.png';
import surgury from '../img/surgury.png';
import ultrasound from '../img/ultrasound.png';


export default class Staff extends Component {
    render() {
        return (
            <div  className="container" style={{marginLeft:'40px',marginTop:'40px'}}>
                <CardColumns>
  <Card>
    <Card.Img variant="top" src={doc} />
    <Card.Body>
      <Card.Title>Wellness Care and Vaccines
</Card.Title>
      <Card.Text>
      We provide extensive wellness plans tailor-made for each individual patient and his or her lifestyle. 
       This includes annual examinations, vaccinations, parasite and infectious disease screening, and blood work.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="p-3">
    <blockquote className="blockquote mb-0 card-body">
    <Card.Img src={ultrasound}/>
    
      <Card.Text>
       The practice of high-quality veterinary medicine focuses on the entire patient – from medical issues that affect physical functioning,
        to emotional and psychological issues that affect well-being. Experiencing pain can affect the body’s physical functioning and can have
         a detrimental effect on a patient’s well-being and state of mind. 
       That’s why pain management is among our primary considerations when we are treating a pet for any medical condition. 
       </Card.Text>
     
    </blockquote>
  </Card>
  <Card>
    <Card.Img variant="top" src={doc1}/>
    <Card.Body>
      <Card.Title>Senior Care and Wellness
 </Card.Title>
      <Card.Text>
      We recommend that both dogs and cats have a full senior examination soon after 7 years of age. 
      The best way to help protect your pet as he or she ages is to understand the aging process in pets.
       We understand that process and can help you help your pet. Even if your senior pet is already being treated for a medical condition,
        treatment recommendations can change as a condition progresses. Sometimes medication dosages need to be adjusted,
         or medication may need to be changed. Routine wellness blood work and other routine diagnostic testing are important for senior pets 
         because 
      these tests allow us to evaluate how your pet’s health is either responding to current management strategies or changing with age.{' '}
      </Card.Text>
    </Card.Body>
  
  </Card>
  <Card bg="info" text="white" className="text-center p-3">
      
    <blockquote className="blockquote mb-0 card-body">
        
     <Card.Text>
      We offer a full set of veterinary service at our three animal clinics. From pet exams and wellness packages, to
       complex surgeries, veterinary rehabilitation, vaccinations,
       pet dental care and more, we have the ability to help your pet have a long and happy life. 
       </Card.Text>
  
    </blockquote>
  </Card>
  <Card className="text-center">
    <Card.Body>
   
      <Card.Img src={surgury}/>
      <Card.Title>Surgery
</Card.Title>

      <Card.Text>
      With our skilled surgeons and top notch equipment, we are able to offer a variety of surgical procedures ranging from routine spays and
       neuters, dentals to more advanced soft tissue surgeries.  We have a fully equipped sterile surgery
       suite that allows us to provide the best possible surgical advantages for your patient. {' '}
      </Card.Text>
  
    </Card.Body>
  </Card>
  <Card>
    <Card.Img src={doc2}/>
  </Card>
  <Card className="text-right">

    <blockquote className="blockquote mb-0 card-body">

     <Card.Text>
      Sometimes one of the greatest gifts we can provide our pets is the relief of their suffering when they are unable to maintain a 
      good quality of life.  If this is the right decision for your pet, we can assist in their transition from life to death.  
      If you have questions about the process or if this may be the right decision for your pet, please contact one of our doctors, and they can help to answer your questions.  In nice weather we offer a lovely back garden where you and your pet can be at peace in a natural setting.
        At home appointments can be arranged.
      </Card.Text>
 
    </blockquote>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Vaccination</Card.Title>
      <Card.Img src={vaccine}/>

      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
     
    </Card.Body>
  </Card>
</CardColumns>

            </div>
        )
    }
}
