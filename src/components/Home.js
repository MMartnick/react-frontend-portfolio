import React from 'react';
import { Container } from 'react-bootstrap';
import Portfolio from './Portfolio';
import '../index.css'; // Make sure this is imported for custom styles

const Home = () => (
  <>
    <Container fluid className="custom-jumbotron">

    </Container>
    
    {/* Portfolio Section - make sure it's directly below the Jumbotron */}
    <Portfolio />
  </>
);

export default Home;
