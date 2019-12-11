import React from 'react';

import { Button, ButtonGroup, Container, Row, Col, } from 'reactstrap';
import RandomCard from './RandomCard';

function Home() {
    return (
        <Container className="container-fluid">
            <Row className="justify-content-center">
                <Col xs="3"></Col>
                <Col xs="3">
                    <h1>Cocktails</h1>
                </Col>
                <Col xs="3"></Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs="3">
                    <ButtonGroup vertical>
                        <Button>View all</Button>
                        <Button>Most popular</Button>
                        <Button>Cocktail of the month</Button>
                    </ButtonGroup>
                </Col>
                <Col xs="4">
                    <RandomCard>

                    </RandomCard>
                </Col>
                <Col xs="3">
                    <img class="img-fluid" src="https://via.placeholder.com/120x600?text=120x600+Skyscraper"/>
                </Col>
            </Row>
            <Row xs="3"></Row>
        </Container>
    );
}
export default Home;