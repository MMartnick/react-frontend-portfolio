import React, { useState } from 'react';
import { Modal, Container, Row, Col } from 'react-bootstrap';
import '../index.css';

const ArtDesignGallery = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShow = (project) => setSelectedProject(project);
  const handleClose = () => setSelectedProject(null);

  return (
    <Container>
      <Row className="gallery-grid">
        {projects.map((project, index) => (
          <Col md={4} key={index} className="mb-4">
            <img
              src={project.media}
              alt={project.title}
              className="img-fluid gallery-image"
              onClick={() => handleShow(project)}
            />
          </Col>
        ))}
      </Row>

      {/* Modal for Enlarged View */}
      <Modal show={!!selectedProject} onHide={handleClose} centered>
        <Modal.Body>
          <Container>
            <Row>
              <Col md={6}>
                <img
                  src={selectedProject?.media}
                  alt={selectedProject?.title}
                  className="img-fluid"
                />
              </Col>
              <Col md={6}>
                <h3>{selectedProject?.title}</h3>
                <p>{selectedProject?.description}</p>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ArtDesignGallery;
