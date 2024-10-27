import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Project = ({ title, description, media, type }) => (
  <>
    {type === 'video' ? (
      <Row className="align-items-center my-4 project-video">
        <Col md={6} className="text-left">
          <h3>{title}</h3>
          <p>{description}</p>
        </Col>
        <Col md={6}>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src={media}
              title={title}
              allowFullScreen
            ></iframe>
          </div>
        </Col>
      </Row>
    ) : (
      <div className="project mb-4">
        <h3>{title}</h3>
        <p>{description}</p>
        <img src={media} alt={title} className="img-fluid" />
      </div>
    )}
  </>
);

export default Project;
