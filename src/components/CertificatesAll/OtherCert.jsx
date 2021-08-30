import React from 'react'
import { Container,Row, Col, Card } from 'react-bootstrap'
import EWIS from '../../assets/cert-img/ewis.JPG';
import FuelSaf from '../../assets/cert-img/fuelsafety.JPG';
import Human from '../../assets/cert-img/humanfactors.JPG'
import Legislation from '../../assets/cert-img/legislation.JPG'

export default function OtherCert() {
    return (
        <>
        <Container className="cert">
           <h2 > My other certificates. </h2>
           <Row className="justify-content-md-center">
               <Col>
               <Card style={{ width: '20rem', margin: '1rem' }} border="warning">
                    <Card.Img src={EWIS} variant="top"/>
                                       
                    <Card.Body>
                        <Card.Title>EWIS</Card.Title>
                        <Card.Text>
                            Electrical Wiring Interconnection System.
                        </Card.Text>
                      
                    </Card.Body>
                </Card>
               </Col>
               <Col>
               <Card style={{ width: '20rem', margin: '1rem' }} border="warning">
               <Card.Img src={FuelSaf} variant="top"/>                     
                    <Card.Body>
                        <Card.Title>Fuel safety.</Card.Title>
                        <Card.Text>
                        
                        </Card.Text>
                      
                    </Card.Body>
                </Card>
               </Col>
               <Col>
               <Card style={{ width: '20rem', margin: '1rem' }} border="warning">
                    <Card.Img variant="top" src={Human}/>                    
                    <Card.Body>
                        <Card.Title>Human factors </Card.Title>
                        
                    </Card.Body>
                </Card>
               </Col>
               <Col>
               <Card style={{ width: '20rem' , margin: '1rem'}} border="warning">
                    <Card.Img variant="top" src={Legislation}/>                    
                    <Card.Body>
                        <Card.Title>Aviation legislation. </Card.Title>
                        
                    </Card.Body>
                </Card>
               </Col>
           </Row>
       </Container>
        </>
    )
}

                      