import React from 'react'

import books from '../assets/images/books.jpg'
import run from '../assets/images/run.jpg'
import code from '../assets/images/code.jpg'
import { Container, Row, Col, Image } from 'react-bootstrap'

export default function Skills() {
    return (
        <Container>
            <Row xs={1} >
                <Col md={4} ><Image src={books} style={{ width: '20rem'}}/></Col>
                <Col md={4} ><Image src={run} style={{ width: '20rem' }}/></Col>
                <Col md={4} ><Image src={code} style={{ width: '20rem' }}/></Col>
                <Col md={12}>
                    <div>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore veritatis debitis incidunt, quo obcaecati culpa! Recusandae earum facere delectus, pariatur illo fuga veniam blanditiis saepe! Beatae neque dicta dolorem aut!
                    </div>
                </Col>
            </Row>

        
        </Container>
        
    )

}
