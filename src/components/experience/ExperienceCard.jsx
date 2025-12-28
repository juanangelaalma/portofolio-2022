import React from "react";
import { Fade } from "react-reveal";
import "./experience-card.css";

const ExperienceCard = ({ experience }) => {
    return (
        <Fade bottom duration={1000} distance="20px">
            <div className="experience-card">
                <div className="experience-card-body">
                    <div className="experience-card-header">
                        <div className="experience-card-company-logo">
                            <img src={experience.logo} alt={experience.company} />
                        </div>
                        <div className="experience-card-title">
                            <h3>{experience.title}</h3>
                            <h4>{experience.company}</h4>
                        </div>
                    </div>
                    <div className="experience-card-date">
                        <p>{experience.date}</p>
                    </div>
                    <div className="experience-card-description">
                        <p>{experience.description}</p>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default ExperienceCard;
