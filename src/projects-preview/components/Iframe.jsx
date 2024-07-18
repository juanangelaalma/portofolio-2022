import React from "react";

const Iframe = ({ src, style }) => {
    return (
        <div style={{ ...style }} className="modal-preview__container-wrapper__content-preview_iframe">
            <iframe
                width={560}
                height={315}
                src={src}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen="yes"
            />
        </div>
    );
};

export default Iframe;
