import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { ImagesPath } from "./ImagesPath";

import '../../css/Art.css';

function Images(props) {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { ImagesPath, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <div>

            <section className="leftSide">
                <p className="artSub">Painting</p>
                <article className="artDesc">
                    <p className="break">
                        I have always had an interest in drawing and studied different eras of art history and styles but did not truly begin painting until 2006.
                    Over the years my work has gone through a variety of changes to draw from different aspects of design, graffiti, fantasy art, and the baroque period.</p>
                    <p className="break">
                        These genres have affected my work the most and I have found that I enjoy working as a portrait and figure painter.
                        What is shown through as the most defining feature of my artwork is the consistent use of high color contrast and is what is set my work apart in in gallery settings.
                    </p>
                </article>
            </section>



            <div className="gallery">
                <Gallery photos={ImagesPath} onClick={openLightbox} />
                <ModalGateway>
                    {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel
                                currentIndex={currentImage}
                                views={ImagesPath.map(x => ({
                                    ...x,
                                    srcset: x.srcSet,
                                    caption: x.title
                                }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </div>

            <p className="pad"> &nbsp; </p>

            <section className="leftBottom">
                <p className="subt">Experience and Exhibitions</p>
                <ul className="artList">
                    <li className="artItem"><b>2018:</b> Conception Art Collective - Exhibition</li>
                    <li className="artItem"><b>2016:</b> The Link - Exhibition</li>
                    <li className="artItem"><b>2016:</b> Preposterous Magazine - Publication</li>
                    <li className="artItem"><b>2015 - 2016:</b>  Jankura Art Space - Artist in residence</li>
                    <li className="artItem"><b>2015:</b> Jeonbuk Art Museum - Exhibition</li>
                    <li className="artItem"><b>2015:</b> SYLC Charity Art Fair - Exhibition</li>
                    <li className="artItem"><b>2015:</b> 12th Yongson International Art Festival - Exhibition</li>
                    <li className="artItem"><b>2013:</b> Northampton Area School District - Extracurricular Art Instructor</li>
                    <li className="artItem"><b>2013:</b> FOA Gallery - Exhibition</li>
                    <li className="artItem"><b>2012 - 2013:</b> Alternative Gallery - Artist in residence/Youth Art Instructor</li>
                </ul>
            </section>
        </div>
    );
}
export default Images;
