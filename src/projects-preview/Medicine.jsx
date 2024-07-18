import React from "react";
import LazyLoad from 'react-lazy-load';
import img1 from "../assets/projects-previews/medicine/1.jpg";
import img2 from "../assets/projects-previews/medicine/2.jpg";
import img3 from "../assets/projects-previews/medicine/3.jpg";
import img4 from "../assets/projects-previews/medicine/4.jpg";
import img5 from "../assets/projects-previews/medicine/5.jpg";

const Medicine = () => {
    return (
        <>
            <LazyLoad once={true} offsetVertical={300}>
                <img
                    height="100%"
                    width="100%"
                    src={img1}
                    alt="Medicine 1"
                />
            </LazyLoad>
            <LazyLoad once={true} offsetVertical={300}>
                <img
                    height="100%"
                    width="100%"
                    src={img2}
                    alt="Medicine 2"
                />
            </LazyLoad>
            <LazyLoad once={true} offsetVertical={300}>
                <img
                    height="100%"
                    width="100%"
                    src={img3}
                    alt="Medicine 3"
                />
            </LazyLoad>
            <LazyLoad once={true} offsetVertical={300}>
                <img
                    height="100%"
                    width="100%"
                    src={img4}
                    alt="Medicine 4"
                />
            </LazyLoad>
            <LazyLoad once={true} offsetVertical={300}>
                <img
                    height="100%"
                    width="100%"
                    src={img5}
                    alt="Medicine 5"
                />
            </LazyLoad>
        </>
    );
};

export default Medicine;
