import React, { useState } from 'react';
import { Modal, Container, Row, Col, Button } from 'react-bootstrap';
import Project from './Project';

const PortfolioSection = ({ title, projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShow = (project) => setSelectedProject(project);
  const handleClose = () => setSelectedProject(null);

  // Generate the section ID based on the title
  const sectionId = title.toLowerCase();
  const isGallerySection = title === 'Art' || title === 'Design';

  return (
    <section id={sectionId} className="portfolio-section py-4">
      <h2 className="text-center mb-4">{title}</h2>
      <Container>
        <Row className={isGallerySection ? 'gallery-grid g-1' : ''}>
          {projects.map((project, index) => (
            <Col
              key={index}
              md={isGallerySection ? 3 : 12}
              sm={isGallerySection ? 6 : 12}
              xs={12}
              className={project.type === 'image' ? 'mb-0.5' : ''}
            >
              {project.type === 'image' ? (
                <img
                  src={project.media}
                  alt={project.title}
                  className="img-fluid gallery-image"
                  onClick={() => handleShow(project)}
                />
              ) : (
                <Project
                  title={project.title}
                  description={project.description}
                  media={project.media}
                  type={project.type}
                />
              )}
              {project.type !== 'image' && index < projects.length - 1 && <hr className="my-4" />}
            </Col>
          ))}
        </Row>

        {/* Modal for Enlarged View of Art/Design Projects */}
        <Modal show={!!selectedProject} onHide={handleClose} centered size="lg">
          <Modal.Body>
            <Button className="close-button" variant="link" onClick={handleClose}>
              &times;
            </Button>
            <Container>
              <Row>
                <Col md={8}>
                  <div className="modal-image-square-full-height">
                    <img
                      src={selectedProject?.media}
                      alt={selectedProject?.title}
                      className="modal-image-fit"
                    />
                  </div>
                </Col>
                <Col md={4}>
                  <h3>{selectedProject?.title}</h3>
                  <p>{selectedProject?.description}</p>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>
      </Container>
    </section>
  );
};

export default PortfolioSection;
