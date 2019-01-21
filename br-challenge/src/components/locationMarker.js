import React from 'react';
import HotDog from '../images/tab_lunch@2x.png';

export default function LocationMarker(props) {
    return (
        <div className="hotDogHolder">
            <img className="hotDogImage" src={HotDog} alt='' />
        </div>
    )
}