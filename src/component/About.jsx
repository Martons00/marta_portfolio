import React from 'react';

const About = () => {
    const getRandomText = () => {
        const randomTexts = [
            "Hello, world!",
            "React is awesome!",
            "Coding is fun!",
            "Keep learning new things!",
            "Randomness is key!",
        ];
        const randomIndex = Math.floor(Math.random() * randomTexts.length);
        return randomTexts[randomIndex];
    };

    return (
        <div>
            <h1>About Me</h1>
            <p>{getRandomText()}</p>
        </div>
    );
};

export default About;