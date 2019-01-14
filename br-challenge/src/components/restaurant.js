import React from 'react';
import { Col } from 'reactstrap';
import Gradient from '../images/cellGradientBackground@2x.png'

export default function Restaurant(props) {
    return (
        <Col md="6" className="restaurant">
            <div className="overlayBox" onClick={event => props.selectRestaurant(props.data)}>
                {/* creates a div that holds the background image */}
                <div className="restaurantImage" style={{ backgroundImage: "url(" + props.data.backgroundImageURL + ")" }} />
                {/* holds the gradient that is overlayed on the background image */}
                <img src={Gradient} alt='' className="restaurantGradient" />
                {/* holds the name of the restaurant */}
                <span className="restaurantName">{props.data.name}</span>
                {/* holds the name of the restaurant category */}
                <span className="restaurantCatagory">{props.data.category}</span>
            </div>
        </Col>
    )
}