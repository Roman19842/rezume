import React from 'react'

import books from '../assets/images/books.jpg'
import run from '../assets/images/run.jpg'
import code from '../assets/images/code.jpg'
import { Container, Row, Col, Image } from 'react-bootstrap'

export default function Skills() {
    return (
        <Container style={{ marginTop: '2em',fontFamily: 'Balsamiq Sans',fontStyle: 'cursive',
        }}>
            <Row xs={1} >
                <Col md={4} ><Image src={books} style={{ width: '20rem'}}/></Col>
                <Col md={4} ><Image src={run} style={{ width: '20rem' }}/></Col>
                <Col md={4} ><Image src={code} style={{ width: '20rem' }}/></Col>
                <Col md={12}>
                    <div>
                        <h4 style={{ fontStyle:'bold'}}>My skills:</h4>
                        Profound knowledge of aviation ,aerodynamics, mechanics, electrical and radio engineering and Computer Engineering.   In order to be up to date, I take courses on OpenEdu.ru, watch YouTube videos, read professional literature and articles. I love my profession and take responsibility for what I do. I have a good command of gadgets and  PCs (MC office, …). I’m also interested in programming so in my free time I study it (I successfully completed a Python course by Bauman University). This site was created by me.
                        I’m eager for knowledge and activities so reading and jogging are always in my life.
                        <p>Driving licence: A,B,C categories</p>
                        <p>Technical English</p>

                    </div>
                </Col>
            </Row>

        
        </Container>
        
    )

}
