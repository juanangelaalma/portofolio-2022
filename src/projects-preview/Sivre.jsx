import React from "react";
import LazyLoad from "react-lazy-load";
import img1 from "../assets/images/projects/main/sivre.webp";
import img2 from "../assets/projects-previews/sivre/2.jpg";
import img3 from "../assets/projects-previews/sivre/3.jpg";

const Sivre = () => {
    return (
        <>
            <LazyLoad once={true} offsetVertical={300}>
                <img height="100%" width="100%" src={img1} alt="Sivre 1" />
            </LazyLoad>
            <LazyLoad once={true} offsetVertical={300}>
                <img height="100%" width="100%" src={img2} alt="Sivre 2" />
            </LazyLoad>
            <LazyLoad once={true} offsetVertical={300}>
                <img height="100%" width="100%" src={img3} alt="Sivre 3" />
            </LazyLoad>
        </>
    );
};

export default Sivre;
