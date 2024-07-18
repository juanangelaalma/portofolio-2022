import React from "react";

import "./project-links.css";

const ProjectLinks = ({ video, github, url, className, preview, handlePreviewClick }) => {
    return (
        <div className={`project-links__wrapper ${className}`}>
            {video && (
                <a href={video} target="__blank">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18M10.783 7.99l5.644 3.136a1 1 0 0 1 0 1.748l-5.644 3.136A1.2 1.2 0 0 1 9 14.96V9.04a1.2 1.2 0 0 1 1.783-1.05"
                            clipRule="evenodd"
                        />
                    </svg>
                </a>
            )}
            {github && (
                <a href={github} target="__blank">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="currentColor"
                            d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                        />
                    </svg>
                </a>
            )}
            {url && (
                <a href={url} target="__blank">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="currentColor"
                            d="m21 11l-6-6v5H8c-2.76 0-5 2.24-5 5v4h2v-4c0-1.65 1.35-3 3-3h7v5z"
                        />
                    </svg>
                </a>
            )}
                <button onClick={handlePreviewClick}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        viewBox="0 0 48 48"
                    >
                        <g
                            fill="none"
                            stroke="#9ca3af"
                            strokeLinejoin="round"
                            strokeWidth={4}
                        >
                            <path d="M24 36c11.046 0 20-12 20-12s-8.954-12-20-12S4 24 4 24s8.954 12 20 12Z" />
                            <path d="M24 29a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z" />
                        </g>
                    </svg>
                </button>
        </div>
    );
};

export default ProjectLinks;
