import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';


class LeftSide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pets: [],
            isLoading: true,
            error: null
        };
    }

    componentDidMount() {
        fetch('http://localhost:5000/pets')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong...');
                }
            })
            .then(data => {
                this.setState({ pets: data, isLoading: false });
            })
            .catch(error => {
                this.setState({ error, isLoading: false });
            });
    }

    render() {
        const { pets, isLoading, error } = this.state;

        if (error) {
            return <p>{error.message}</p>;
        }

        if (isLoading) {
            return <p>Loading...</p>;
        }
        return (
            <Nav >

                {
                    pets.map(pet => <NavItem key={pet._id} style={{ color: `blue` }}><NavLink >{pet?.name}</NavLink> </NavItem>)
                }

            </Nav>
        );
    }
};

export default LeftSide;