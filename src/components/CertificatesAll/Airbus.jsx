import React from 'react'
import { Container, Row , Col, Card} from 'react-bootstrap'
import A320P from '../../assets/cert-img/A320F practical_page-0001.jpg'
import A320T from '../../assets/cert-img/A320Ftheory_page-0001.jpg'
import A320R from '../../assets/cert-img/A320F results_page-0001.jpg'

export default function Airbus() {
    return (
        <>
            <Container className="cert">
           <h2 >A-320(CFM56) B1.1+B2 </h2>
           <Row className="justify-content-md-center">
               <Col>
               <Card style={{ width: '20rem' }} border="warning">
                    <Card.Img src={A320T} variant="top"/>
                                       
                    <Card.Body>
                        <Card.Title>Theoretical elements.</Card.Title>
                        <Card.Text>
                            Airbus 318/319/320/321 (CFM56) B1.1+B2 type training course.
                            18 May 2020 - 4 July 2020
                        </Card.Text>
                      
                    </Card.Body>
                </Card>
               </Col>
               <Col>
               <Card style={{ width: '20rem' }} border="warning">
               <Card.Img src={A320P} variant="top"/>                     
                    <Card.Body>
                        <Card.Title>Practical elements.</Card.Title>
                        <Card.Text>
                        Airbus 318/319/320/321 (CFM56) B1.1+B2 type training course.
                            20 July 2020 - 31 July 2020
                        </Card.Text>
                      
                    </Card.Body>
                </Card>
               </Col>
               <Col>
               <Card style={{ width: '20rem' }} border="warning">
                    <Card.Img variant="top" src={A320R}/>                    
                    <Card.Body>
                        <Card.Title>Examination report. </Card.Title>
                        
                    </Card.Body>
                </Card>
               </Col>
           </Row>
       </Container>
        </>
    )
}
