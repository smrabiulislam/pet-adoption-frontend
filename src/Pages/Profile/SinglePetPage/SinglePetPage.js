import React from 'react';
import { Col, Row } from 'react-bootstrap';

import LeftSide from './LeftSide';
import RightSide from './RightSide';

import './SinglePetPage.css';

const SinglePetPage = () => {
    return (
        <div className='bg'>

            <Row className='w-75 mx-auto'>
                <Col xs={6} md={3} className='bgl'>
                    <LeftSide></LeftSide>
                </Col>
                <Col xs={12} md={9}>
                    <RightSide></RightSide>
                </Col>
            </Row>

        </div>
    );
};

export default SinglePetPage;