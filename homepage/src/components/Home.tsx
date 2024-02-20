import React from 'react'
import '../App.css';
import NavBar from './NavBar';
import Image from 'react-bootstrap/Image';
import photo from '../selfie.jpg'
import { Col, Container, Row } from 'react-bootstrap';


const Home: React.FC = () => {
    return (
        <div className="App">
            {/* <NavBar/> */}
            <Container className="vh-100" >
                <Row className="my-2 justify-content-md-center">
                    <Col xs={6} md={4}>
                        <Image
                            src={photo}
                            alt="it's me"
                            height="300vmin"
                            roundedCircle
                            />
                    </Col>
                </Row>
                <Row className='my-100'>
                    <Col>
                        Hello! My name is Paul Storm. I am a fullstack software developer.
                    </Col>
                </Row>
                <Row>
                    <Col>
                        This page is a work in progress, click <a href="https://www.youtube.com/watch?v=pmqzUk7WuUk&feature=youtu.be">here</a> for a demo of a previous full-stack application I built
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home