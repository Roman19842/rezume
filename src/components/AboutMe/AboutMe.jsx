import React from 'react'
import { Card } from 'react-bootstrap'
import me from '../../assets/images/Me2.jpg'
export default function AboutMe() {
    return (
        <>
        <div style={{ paddingTop:'2rem',paddingBottom:'5rem'}}>
            <Card style={{ width: 'auto', marginLeft: '3rem',marginRight: '3rem',}} border="warning">
                <Card.Img variant="top" src={me} style={{ width: '15rem',}} />
                <Card.Body>
                    <Card.Title style={{ fontFamily:'Dancing Script' ,fontSize: '150%',color:'#FFA100'}}>About me.</Card.Title>
                    <Card.Text style={{ fontFamily:'Dancing Script' ,fontSize: '130%',color:'black'}}>
                        
My name is<strong style={{color:'#FFA100'}}> Lapin Roman</strong>. I was born on October 28, 1984 in Kazakhstan. My profession is an aviation engineer  <strong style={{color:'#FFA100'}}> avionics</strong>. I graduated from the <a href="http://oltuga-spo.ru/">Omsk Aviation College.</a> I have been working since 2006 on Mi-8 helicopters, and I also have experience in airplanes. All additional information you can help to look at the other pages of this site
                    <p>Now i live in Russia in Moscow region.</p>
                    </Card.Text>
                    
                </Card.Body>
            </Card>
        </div>
        </>
    )
}
