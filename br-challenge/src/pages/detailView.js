import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function DetailView(props) {
    return (
        <Container className="detailViewContainer">
            <Row>
                <Col className="exitBar" xs="1">
                    leave
                </Col>
            </Row>
        </Container>
    )
}