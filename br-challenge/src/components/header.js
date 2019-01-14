import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import MapLogo from '../images/icon_map@2x.png'


export default function Header(props) {
    return (
        <Container className="siteHeader">
            <Row>
                {/* holds the title of the app */}
                <Col className="mainTitle" md={{ size: '4', offset: '4' }}>
                    <span>Lunch Tyme</span>
                </Col>
                {/* holds the map icon */}
                <Col md="4">
                    <img className="mapIcon" src={MapLogo} alt='Map View' />
                </Col>
            </Row>
        </Container>

    )
}