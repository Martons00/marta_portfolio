import React from 'react';

const Work = () => {
    const projects = [
        { id: 1, name: 'Portfolio Website', description: 'A personal portfolio to showcase my work.', link: '#' },
        { id: 2, name: 'E-commerce App', description: 'An online store with cart and payment integration.', link: '#' },
        { id: 3, name: 'Blog Platform', description: 'A platform to write and share blog posts.', link: '#' },
    ];

    return (
        <div>
            <h2>My Work</h2>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Work;