import React from "react";
import LazyLoad from 'react-lazy-load';
import img1 from "../assets/projects-previews/medianku/1.png";
import img2 from "../assets/projects-previews/medianku/2.png";
import img3 from "../assets/projects-previews/medianku/3.png";
import img4 from "../assets/projects-previews/medianku/4.png";
import img5 from "../assets/projects-previews/medianku/5.png";
import img6 from "../assets/projects-previews/medianku/6.png";
import img7 from "../assets/projects-previews/medianku/7.png";

const Medianku = () => {
    return (
        <>
            <LazyLoad once={true} offsetVertical={300}>
                <img
                    height="100%"
                    width="100%"
                    className="medianku__img"
                    src={img1}
                    alt="Medianku 1"
                />
            </LazyLoad>
            <LazyLoad once={true} offsetVertical={300}>
                <img
                    height="100%"
                    width="100%"
                    className="medianku__img"
                    src={img7}
                    alt="Medianku 7"
                />
            </LazyLoad>
            <LazyLoad once={true} offsetVertical={300}>
                <img
                    height="100%"
                    width="100%"
                    className="medianku__img"
                    src={img2}
                    alt="Medianku 2"
                />
            </LazyLoad>
            <LazyLoad once={true} offsetVertical={300}>
                <img
                    height="100%"
                    width="100%"
                    className="medianku__img"
                    src={img3}
                    alt="Medianku 3"
                />
            </LazyLoad>
            <LazyLoad once={true} offsetVertical={300}>
                <img
                    height="100%"
                    width="100%"
                    className="medianku__img"
                    src={img4}
                    alt="Medianku 4"
                />
            </LazyLoad>
            <LazyLoad once={true} offsetVertical={300}>
                <img
                    height="100%"
                    width="100%"
                    className="medianku__img"
                    src={img5}
                    alt="Medianku 5"
                />
            </LazyLoad>
            <LazyLoad once={true} offsetVertical={300}>
                <img
                    height="100%"
                    width="100%"
                    className="medianku__img"
                    src={img6}
                    alt="Medianku 6"
                />
            </LazyLoad>
        </>
    );
};

export default Medianku;
