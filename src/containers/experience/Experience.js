import React from "react";
import HeaderOfList from "../../components/headoflist/HeaderOfList";
import ExperienceCard from "../../components/experience/ExperienceCard";
import "./experience.css";

// Dummy data for experience
const experiences = [
    {
        title: "Software Engineer",
        company: "Google",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
        date: "2022 - Present",
        description: "Working on advanced AI technologies and developing scalable software solutions.",
    },
    {
        title: "Frontend Developer",
        company: "Facebook",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
        date: "2020 - 2022",
        description: "Built responsive and interactive user interfaces using React and GraphQL.",
    },
    {
        title: "Intern",
        company: "Amazon",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg",
        date: "2019 - 2020",
        description: "Assisted in developing e-commerce features and optimizing page load times.",
    },
];

const Experience = () => {
    return (
        <section id="experience" className="experience section__padding">
            <HeaderOfList title="Professional Experience" />
            <div className="experience-list">
                {experiences.map((exp, index) => (
                    <ExperienceCard key={index} experience={exp} />
                ))}
            </div>
        </section>
    );
};

export default Experience;
