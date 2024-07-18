import React from "react";
import LazyLoad from 'react-lazy-load';
import img1 from "../assets/projects-previews/teethid/1.jpg";

const TeethId = () => {
    return (
        <>
            <LazyLoad once={true} offsetVertical={300}>
                <img
                    height="100%"
                    width="100%"
                    src={img1}
                    alt="Teeth 1"
                />
            </LazyLoad>
        </>
    );
};

export default TeethId;
