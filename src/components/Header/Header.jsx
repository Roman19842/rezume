import { Navbar, Nav,
} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    
  } from "react-router-dom";
import Home from '../Home/Home'
import AboutMe from '../AboutMe/AboutMe';
import Experiance from '../Experiance/Experiance'
import Certificates from '../Certificates';
import Skills from '../Skills';
import Contacts from '../Contacts';


function Header() {
    return (
        <><Router>
            <Navbar bg="primary" variant="dark" expand="md" >
                <Navbar.Brand href="/aboutme" style={{
                        color:'#FFA100',
                        paddingLeft: '30px',
                        fontSize: '200%',
                        fontFamily: 'Dancing Script',}}>
                            <div title="About me"> Lapin Roman  </div> 
                                
                           
                     </Navbar.Brand> 
                <Nav style={{
                   
                    fontSize: '130%',
                    fontFamily: 'Dancing Script',
                    paddingLeft: '50px',
                    
                }}>
                    <Nav.Link href="/" style={{ color:'#FFCB73'}}>Home</Nav.Link>
                    <Nav.Link href="/experience" style={{ color:'#FFCB73'}}>My experience</Nav.Link>
                    <Nav.Link href="/certificates" style={{ color:'#FFCB73'}}>My certificates</Nav.Link>
                    <Nav.Link href="/skills" style={{ color:'#FFCB73'}}>My skills</Nav.Link>
                    <Nav.Link href="/contacts" style={{ color: 'red',
                paddingLeft: '50px' }}>Contacts</Nav.Link>

                </Nav>
            </Navbar>
            <Switch>
                    <Route exact path="/"
                    render = { () => <Home />}/> 
                    <Route exact path="/aboutme" component={AboutMe} />
                    <Route exact path="/experience" component={Experiance} />
                    <Route exact path="/certificates" component={Certificates} />
                    <Route exact path="/skills" component={Skills} />
                    <Route exact path="/contacts" component={Contacts} />
            </Switch>
                
            </Router> 
        </>
    );
}
export default Header