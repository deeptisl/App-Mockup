import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Icon } from 'react-icons-kit';
import { home } from 'react-icons-kit/ikons/home'
import Profile from '../../profile.png';
import { angleDown } from 'react-icons-kit/fa/angleDown'
import './Dashboard.css';
import FirstComponent from '../FirstComponent/FirstComponent';
import SecondComponent from '../SecondComponent/SecondComponent';

var rootStyle = {
    backgroundColor: 'aliceblue',
    color: 'black',
    height: '150%'

}


class Dashboard extends React.Component {
    render() {
        return (
            <div style={rootStyle}>
                <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                    <Navbar.Brand href="#home">
                        <Icon
                            style={{ color: 'white' }}
                            size={20}
                            icon={home}
                        />Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav style={{marginLeft:'80%'}}>
                            <Navbar.Brand  eventKey={2} href="#memes" >
                                <img src={Profile} alt="logo" className="photo" />
                               &nbsp; R.L Gupta &nbsp;
                                <Icon
                                    style={{ color: 'white' }}
                                    size={20}
                                    icon={angleDown}
                                />
                            </Navbar.Brand >
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Navbar className='NavBar1'>
                    <Navbar.Brand >
                        Page Heading 1
                </Navbar.Brand>

                    <Navbar.Brand className='NavComponent1'>
                        (+5:30) Chennai,Kolkata,Mumbai,New Delhi
                        &nbsp;
                <Icon
                            style={{ color: 'blue' }}
                            size={20}
                            icon={angleDown}
                        />
                    </Navbar.Brand>
                </Navbar>
                <div>
                    <div className='innerClass'>
                        <FirstComponent />
                        <SecondComponent />
                    </div>

                </div>

            </div>
        );
    }
}

export default Dashboard;
