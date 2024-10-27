import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../index.css'; // Import the CSS file if it isn't already

const About = () => (
  <Container className="py-5">
    <div className="content-top-padding"></div>
    <Row className="align-items-center">
      <Col md={6}>
        <img src="/path-to-your-image.jpg" alt="Profile" className="img-fluid rounded-circle shadow-lg" />
      </Col>
      <Col md={6}>
        <h2>About Me</h2>
        <p>
          I am a designer and developer, blending creativity with technology to craft beautiful and functional web experiences.
        </p>
        <p>
          With a background in art and design, I bring an artistic touch to my work, ensuring that each project not only functions seamlessly but also has a unique aesthetic appeal.
        </p>
      </Col>
    </Row>
  </Container>
);

export default About;
