import React from 'react';
import { Container, Row } from 'reactstrap';
import Restaurant from '../components/restaurant';

export default function ListView(props) {
    return (
        <Container className='listView'>
            <Row>
                {/* used to create the list of restaurants */}
                {props.data.restaurants.map(restaurant => <Restaurant data={restaurant} selectRestaurant={props.selectRestaurant} />)}
            </Row>
        </Container>
    )
}