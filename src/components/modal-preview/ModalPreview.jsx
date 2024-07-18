import React from "react";
import "./modal_preview.css";
import HeaderOfList from "../headoflist/HeaderOfList";

const ModalPreview = ({ preview, handleClosePreview, isOpen }) => {
    const stopAllVideoIframe = () => {
        const videos = document.querySelectorAll("iframe");
        Array.prototype.forEach.call(videos, function (video) {
            var src = video.src;
            video.src = src;
        });
    };

    const onClosePreview = () => {
        handleClosePreview();
        setTimeout(() => {
            stopAllVideoIframe();
        }, 400);
    };

    return (
        <div className={`modal-preview__container ${isOpen ? "show" : ""}`}>
            <div className="modal-preview__container-wrapper">
                <div className="modal-preview__container-wrapper__header">
                    <HeaderOfList
                        title={preview?.title}
                        ulrshowmore={false}
                        className="modal-preview__container-wrapper__header-title"
                    />
                    <div className="modal-preview__container-wrapper__header-close">
                        <button onClick={onClosePreview}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="3em"
                                height="3em"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 12L7 7m5 5l5 5m-5-5l5-5m-5 5l-5 5"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="modal-preview__container-wrapper__content">
                    <div className={`modal-preview__container-wrapper__content-desc ${preview.preview ? '' : 'full-width'}`}>
                        <p className="modal-preview__container-wrapper__content-item">
                            Project description:{" "}
                        </p>
                        <p
                            className="modal-preview__container-wrapper__content-item_value"
                            dangerouslySetInnerHTML={{ __html: preview?.desc }}
                        ></p>

                        <div className="modal-preview__container-wrapper__content-item skill">
                            Skill deliverables:{" "}
                        </div>
                        <div className="modal-preview__container-wrapper__content-item_skill">
                            {preview?.skills &&
                                preview.skills.map((skill) => (
                                    <>
                                        <div>{skill}</div>
                                    </>
                                ))}
                        </div>
                    </div>
                    {preview?.preview && (
                        <div className="modal-preview__container-wrapper__content-preview">
                            {preview.preview}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ModalPreview;
