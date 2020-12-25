import React, {useState,useEffect} from 'react';
import {Line} from 'react-chartjs-2';

import {Pie} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import SearchAppointments from '../Appointments/SearchAppointments';



const DoctorCharts=()=>{
    const[chartData,setChartData]=useState({})
    const chart=()=>{
        setChartData({
            labels:['monday','tuesday','wednesday','friday','saturday','sunday'],
            dataset:[{
                label:'level of thickness',
                data:[32,42,12,76,69],
                backgroundColor:[
                    'rgba(75,192,192,0.6)'
                ],
                borderWidth:4
            }]
        })
    }
    const data = {
        labels: [
            'Total Appointments',
            'Cancel Appointments',
            'Accepted Appointments'
        ],
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ]
        }]
    };

    const data1 = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Number of Appointments taken',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      };
      
const data2 = {
    labels: ['Total Pets Come for Appointment', 'Total deaths of pets', 'Pets recovered'],
    datasets: [
      {
        label: 'Pets Data',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [85, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
    
    useEffect(() => {
        chart()
       
    }, [])
    return(
      <div>
            <Container style={{padding:'30px'}}>
          
                            
                         <Row>
                             <Col>
                             <Card style={{marginLeft:'40px'}}>
                             <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Pie Chart of Appointments
    </Navbar.Brand>
  </Navbar>
  <div style={{marginTop:'20px',padding:'20px'}}>
                        <Pie data={data} />
                        </div>
                        </Card>
                        </Col>



                        <Col>
                        <Card>
                        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Line Graph Of Appointments Taken
    </Navbar.Brand>
  </Navbar>
  <div style={{marginTop:'20px',padding:'4px'}}>

                       
                        <Line data={data1} />
                        </div>
                        </Card>
                        </Col>
                        </Row>


                          <Card style={{marginTop:'50px',marginLeft:'40px'}}>
                          <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Bar Chart for Pets Data
    </Navbar.Brand>
  </Navbar>
  <div style={{marginTop:'55px',marginLeft:'50px',padding:'20px'}}>

                     <Bar
          data={data2}
          width={80}
          height={250}
          options={{
            maintainAspectRatio: false
          }}
        />
              </div>

              </Card>


            </Container>
            <div style={{padding:'10px', marginLeft:'250px',width:"50"}}>
            <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Pets Data History
    </Navbar.Brand>
  </Navbar>
            <Card  style={{padding:'20px'}}> 
            <SearchAppointments/>
            </Card>
            </div>
            </div>
    )

}
export default DoctorCharts;