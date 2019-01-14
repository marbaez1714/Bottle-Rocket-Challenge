import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import CloseButton from '../images/ic_close@2x.png';
import PlaceHolderMap from '../images/map.png';

export default function DetailView(props) {
    return (
        <Container className="detailViewContainer">
            <Row>
                {/* left bar that holds the exit button */}
                <Col className="exitBar" xs="1">
                    <img className="closeButton" src={CloseButton} alt='' onClick={event => props.closeDetailView()} />
                </Col>
                <Col className="detailViewCol" xs='11'>
                    <div className="mapHolder" style={{ backgroundImage: 'url(' + PlaceHolderMap + ")" }} />
                    <div className="detailViewGeneralInfo">
                        <div className='detailHolder'>
                            <span>{props.chosenRestaurant.name}</span>
                            <span></span>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}