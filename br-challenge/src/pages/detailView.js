import React from 'react';
import { Container, Row, Col, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import LocationMarker from '../components/locationMarker';
import GoogleMapReact from 'google-map-react';
import CloseButton from '../images/ic_close@2x.png';

export default function DetailView(props) {
    return (
        <Container className="detailViewContainer">
            {/* only shows if a store is chosen */}
            {props.showDetails === false ? '' :
                <Row>
                    {/* left bar that holds the exit button */}
                    <Col className="exitBar" xs="1">
                        <img className="closeButton" src={CloseButton} alt='' onClick={event => props.closeDetailView()} />
                    </Col>
                    <Col className="detailViewCol" xs='11'>
                        {/* Google map holder - map is rendered using google-map-react for simplicity */}
                        <div className="detailViewMap">
                            <GoogleMapReact
                                defaultCenter={{
                                    lat: props.chosenRestaurant.location.lat,
                                    lng: props.chosenRestaurant.location.lng
                                }}
                                defaultZoom={150}
                            >
                                <LocationMarker
                                    lat={props.chosenRestaurant.location.lat}
                                    lng={props.chosenRestaurant.location.lng}
                                    onClick={event => props.popOverToggle()}
                                    popOverOpen={props.popOverOpen}
                                />
                            </GoogleMapReact>
                        </div>
                        {/* Additional information  */}
                        <div className="detailViewGeneralInfo">
                            {/* Name and catagory holder */}
                            <div className='detailHolder'>
                                <span className="detailName">{props.chosenRestaurant.name}</span>
                                <span className="detailCatagory">{props.chosenRestaurant.category}</span>
                            </div>
                        </div>
                        <div className="moreInfoHolder">
                            <div><span className="address">{props.chosenRestaurant.location.formattedAddress[0]}</span></div>
                            <div ><span className="address">{props.chosenRestaurant.location.formattedAddress[1]}</span></div>
                            <div style={{ marginTop: "1.5vh" }}>{props.chosenRestaurant.contact ? <span className="phoneNumber">{props.chosenRestaurant.contact.formattedPhone}</span> : ''}</div>
                            <div style={{ marginTop: "1.5vh" }}>{props.chosenRestaurant.contact.twitter ? <span className="twitterHandle"><a href={'https://twitter.com/@' + props.chosenRestaurant.contact.twitter}>{'@' + props.chosenRestaurant.contact.twitter}</a></span> : ''}</div>
                        </div>
                    </Col>
                </Row>
            }
        </Container>
    )
}