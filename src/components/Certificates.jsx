import React from 'react'
import Airbus from './CertificatesAll/Airbus'
import Embraer from './CertificatesAll/Embraer';
import OtherCert from './CertificatesAll/OtherCert';
import LinkOnCerts from './LinkOnCerts';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"; 
  import { ListGroup } from 'react-bootstrap';
export default function Certificates() {
    return (
        <Router> 
            <ListGroup>
               <ListGroup.Item><Link to="/airbus"><LinkOnCerts typecert="A320"/></Link></ListGroup.Item>
                <ListGroup.Item><Link to="/embraer"><LinkOnCerts typecert="ERJ-170"/></Link></ListGroup.Item>
                <ListGroup.Item><Link to="/other"> <LinkOnCerts typecert="EWIS+Human Factors+Fuel safety+Aviation legislation"/></Link></ListGroup.Item>
            </ListGroup>
            
            <Switch>
                <Route exact path="/airbus" component={Airbus}/>
                <Route exact path="/embraer" component={Embraer}/>
                <Route exact path="/other" component={OtherCert}/>
            </Switch>
        </Router>
           )
}
