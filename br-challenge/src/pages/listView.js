import React from 'react';
import { Container, Row } from 'reactstrap';
import DetailView from './detailView';
import Restaurant from '../components/restaurant';
import { slide as Menu } from 'react-burger-menu'
import CloseButton from '../images/ic_close@2x.png';

export default function ListView(props) {
    return (
        <div id="outer-container">

            {/* Menu is used to show the detailed view as a drawer */}

            <Menu
                right
                noOverlay
                width={"100%"}
                isOpen={props.showDetails}
                customCrossIcon={false}
                pageWrapId={"page-wrap"}
                outerContainerId={"outer-container"}
            >
                <DetailView closeDetailView={props.closeDetailView} chosenRestaurant={props.chosenRestaurant} showDetails={props.showDetails} popOverToggle={props.popOverToggle} popOverOpen={props.popOverOpen} />
            </Menu>

            {/* list view is always open under the detailed view */}
            <Container className='listView' id="page-wrap">
                <Row>
                    {/* used to create the list of restaurants */}
                    {props.data.restaurants.map(restaurant => <Restaurant data={restaurant} selectRestaurant={props.selectRestaurant} />)}
                </Row>
            </Container>

        </div>
    )
}