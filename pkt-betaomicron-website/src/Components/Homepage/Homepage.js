import React from 'react';
import './Homepage.css';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Homepage = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col>
                        <Image src="https://your-logo-url.com/logo.png" rounded className="img-fluid" />
                    </Col>
                    <Col>
                        <h1>PHI KAPPA TAU</h1>
                        <p>About Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </Col>
                    <Col>
                        <Image src="https://d1fufvy4xao6k9.cloudfront.net/images/blog/posts/2020/03/4113552ea761439e21cdacfd9a7b22b8.jpg" rounded className="img-fluid right-image" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Homepage;
