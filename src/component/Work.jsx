import React from 'react';
import './CSS/Work.css';
import ProjectCard from './Card';

const images = import.meta.glob('../assets/Copertine/*.{png,jpg,jpeg,svg,gif}', { eager: true });

const projects = [
    { id: '01', name: 'Rei Co-op', description: 'A personal portfolio to showcase my work.', link: '01' },
    { id: '02', name: 'InColors', description: 'Education, Entertainment.', link: '02' },
    { id: '03', name: 'Space Motion', description: 'Education-Entertainment.', link: '03' },
];

const Work = () => {
    return (
        <div>
            <h2>My Work</h2>
            <div className="work-grid">
                {projects.map((project) => {
                    const imgPath = `../assets/Copertine/${project.id}.png`;
                    const imageModule = images[imgPath];
                    const imageSrc = imageModule ? imageModule.default : '';

                    return (
                        <div key={project.id} className="work-item">
                            <ProjectCard
                                image={imageSrc}
                                title={project.name}
                                subtitle={project.description}
                                buttonText="View Project"
                                buttonUrl={project.link}
                                isLinked={true}
                            />
                        </div>
                    );
                })}
            </div>

        </div>
    );
};

export default Work;
