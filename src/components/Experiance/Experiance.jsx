import React from 'react'
import {Container, Col, Row, Image } from 'react-bootstrap'
import taz from '../../assets/images/tazhelicopter.jpg'
import unheli from '../../assets/images/unheli.jpg'
import abus from '../../assets/images/s7airbus.jpg'

export default function Experiance() {
    return (
        <>
            <Container style={{ paddingTop:'2rem'}}>
                <Row>
                    <Col sm={2}><Image src={taz} thumbnail="true" style={{width: '70%'}} title="Mi-8 in Tazovsk"/></Col>
                    <Col sm="auto" lg={true} style= {{fontFamily: 'Balsamiq Sans'}}>
                    <h5>
                    Start.</h5>
                     I started my career in 2006 at <a href="http://utair-engineering.ru/">UTair-Engineering</a> in <a href="https://en.wikipedia.org/wiki/Tazovsky_(rural_locality)">Tazovsky</a>. This is the north of Siberia. I worked as a technician for MI-8 (all modifications of the helicopter: Mi-8T/Mi-17/Mi171/Mi-172). I worked in line and base maintenance and also worked in a battery shop (acid 12SAM-28 and alkaline batteries 20NKBN-25). This is a serious school of aviation engineering.
                    <p>There i got B2 (avionic).</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={2}><Image src={unheli} thumbnail="true" style={{width: '70%'}} title="Mi-8 in Africa"/></Col>
                    <Col sm="auto" lg={true} style= {{fontFamily: 'Balsamiq Sans'}}><h5>International experience.</h5>
                    From 2008 to 2018 I worked for various UN missions as an aircraft technician and engineer. I was  in such countries  as South Sudan, Sudan, Congo, Mali, CAR, Uganda, where our helicopters provided humanitarian assistance to local people.
                    <p>
                        I also worked in Afghanistan in 2013-2014 at the <a href="https://en.wikipedia.org/wiki/Camp_Shorabak">Camp Bastion</a>, where I improved my English.
                    </p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={2}><Image src={abus} thumbnail="true" style={{width: '70%'}} title="A-320 in Domodedovo."/></Col>
                    <Col sm="auto" lg={true} style= {{fontFamily: 'Balsamiq Sans'}}>
                    <h5>Aircraft experience.</h5>
                    From August 2018 to April 2021, I worked at <a href="https://www.s7technics.ru/en/about/">S7-Technics</a>.It is the organization EASA Part-145 approved on the territory of Russia (Domodedovo airport, Moscow region.)
                     <p>Here the Russian rules did not apply and I started working as an aviation mechanic without a license. I worked in a hangar (Base maintance).</p>
                     <p>We did A-checks,C-check,D-checks, engine replacements, avionics airworthiness bulletins, fixed complex defects, on aircraft such as A320family(A320 NEO too), B737(classic and NG), Embraer 170.</p>
                    <p>When i was employed by S7-Technics, I successfully passed the following trainings(<a style={{ color: 'red'}}>see My certificates</a>): 1)Electrical Wiring Intercommunucation Systems; 2)Human Factors; 3)fuel Safety; 4) Aviation Legislations 
                        5)type trainings A320 and E170; 6) soft for maintanance AMOS.
                    </p>
                    <p>I got A1  for Embraer-170 in this company.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
