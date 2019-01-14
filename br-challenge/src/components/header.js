import React from 'react';
import { Container, Row, Col } from 'reactstrap';


// main app header

export default function Header(props) {
    return (
        // creates a container for the app header
        <Container className='mainHeader'>
            <Row>
                <Col>
                    <h1>Lunch Tyme</h1>
                </Col>
            </Row>
        </Container>
    )
}