import React from 'react'
import { Container, Row , Col, Card} from 'react-bootstrap'
import E170T from '../../assets/cert-img/ERJ-170 theory_page-0001.jpg'
import E170P from '../../assets/cert-img/ERJ-170 practical_page-0001.jpg'
import E170R from '../../assets/cert-img/ERJ-170 results_page-0001.jpg'

export default function Embraer() {
    return (
        <div>
            <>
            <Container className="cert">
           <h2 >Embraer ERJ-170 B1.1 +B2 </h2>
           <Row className="justify-content-md-center">
               <Col>
               <Card style={{ width: '20rem' }} border="warning">
                    <Card.Img src={E170T} variant="top"/>
                                       
                    <Card.Body>
                        <Card.Title>Theoretical elements.</Card.Title>
                        <Card.Text>
                           Embraer ERJ-170 Series (GE CF34)
                           B1.1+B2 type training course.
                           1 July 2019 -9 August 2019
                        </Card.Text>
                      
                    </Card.Body>
                </Card>
               </Col>
               <Col>
               <Card style={{ width: '20rem' }} border="warning">
               <Card.Img src={E170P} variant="top"/>                     
                    <Card.Body>
                        <Card.Title>Practical elements.</Card.Title>
                        <Card.Text>
                        Embraer ERJ-170 Series (GE CF34)
                           B1.1+B2 type training course.
                           12 August 2019 -23 August 2019
                        </Card.Text>
                      
                    </Card.Body>
                </Card>
               </Col>
               <Col>
               <Card style={{ width: '20rem' }} border="warning">
                    <Card.Img variant="top" src={E170R}/>                    
                    <Card.Body>
                        <Card.Title>Examination report. </Card.Title>
                        
                    </Card.Body>
                </Card>
               </Col>
           </Row>
       </Container>
        </>
        </div>
    )
}
