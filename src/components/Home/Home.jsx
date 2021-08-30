import { Carousel } from 'react-bootstrap'
import airbus from '../../assets/images/Airbus_S7.jpg'
import boeing from '../../assets/images/B_737.jpg'
import mil from '../../assets/images/mi-8.jpg'
import AboutMe from '../AboutMe/AboutMe'
function Home () {
    return(
    <><Carousel>
        <Carousel.Item interval={1000}   >
        <img style={{height:'650px'}}
            className="d-block w-100 "
            src={airbus}
            alt="First slide"
        />
            <Carousel.Caption>
                <div>
                    <h2 style={{fontFamily:'Dancing Script',
                fontSize:'500%',
                color:'#FFA100'}}>Airbus 320CEO</h2>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
        <img  style={{height:'650px'}}
            className="d-block w-100"
            src={boeing}
            alt="First slide"
        />
            <Carousel.Caption>
            <div>
                    <h2 style={{fontFamily:'Dancing Script',
                fontSize:'500%',
                color:'#FFA100'}}>Boeing 737NG</h2>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
        <img  style={{height:'650px'}}
            className="d-block w-100"
            src={mil}
            alt="First slide"
        />
            <Carousel.Caption>
            <div>
                    <h2 style={{fontFamily:'Dancing Script',
                fontSize:'500%',
                color:'#FFA100'}}>Mi-8AMT/Mi-171, Mi-8MTV/Mi-17</h2>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
    
    </Carousel>
    <AboutMe />
    </>
    )
}

export  default Home;