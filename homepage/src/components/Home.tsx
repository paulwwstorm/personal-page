import React from 'react'
import '../App.css';
import NavBar from './NavBar';
import Image from 'react-bootstrap/Image';
import photo from '../selfie.jpg'
import { Col, Container, Row } from 'react-bootstrap';


const Home: React.FC = () => {
    return (
        <div 
        className="App"
        >
            <NavBar/>
            <header 
            className="App-header"
            >
                <Container fluid>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image
                                src={photo}
                                alt="it's me"
                                height="300vmin"
                                text-align="center"
                                roundedCircle
                                />
                        </Col>
                    </Row>
                    <div>
                        Hello! My name is Paul Storm. I am a fullstack software developer.
                    </div>
                    <div>
                        This page is a work in progress, click <a href="https://www.youtube.com/watch?v=pmqzUk7WuUk&feature=youtu.be">here</a> for a demo of a previous full-stack application I built
                    </div>
                </Container>
            </header>
        </div>
    )
}

export default Home