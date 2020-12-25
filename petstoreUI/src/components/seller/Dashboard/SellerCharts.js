import React, {useState,useEffect} from 'react';
import {Line} from 'react-chartjs-2';

import {Pie} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const SellerCharts=()=>{
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
            'Total Products',
            'Sold out',
            'Remaining Products'
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
            label: 'Total Sales ',
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
    labels: ['Total Products', 'cancel', 'confirm', 'pending'],
    datasets: [
      {
        label: 'Orders',
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
        
            <Container style={{padding:'30px'}}>
          
                            
                         <Row>
                             <Col>
                        <Pie data={data} />
                        </Col>
                        <Col>
                       
                        <Line data={data1} />
                        </Col>
                        </Row>
                        <div style={{marginTop:'55px',marginLeft:'50px'}}>
        {/* <h2>Bar Example (custom size)</h2> */}
        <Bar
          data={data2}
          width={80}
          height={250}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>


            </Container>
    )

}
export default SellerCharts;