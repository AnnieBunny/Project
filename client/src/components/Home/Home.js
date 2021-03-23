import React , {Component} from 'react'
import {Link} from 'react-router-dom'
import {Jumbotron, Container, Row, Col, image, Button} from 'react-bootstrap'
import './Home.css'


 class Home extends Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h2>Wellcome to travell lovers site</h2>
                    <p>This website is for people who love to travell</p>
                </Jumbotron>
            </Container>
        )
    }
}

export default Home