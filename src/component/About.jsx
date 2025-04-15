import React from 'react';
import './CSS/About.css'; 

const About = () => {
    return (
        <div className="about-container">
            <h1>About Me</h1>
            <p>
                I am Marta Spaccapietra, a communication and marketing professional with expertise in Digital Marketing, UX/UI Design, and Project Management. Passionate about digital technologies and creative problem-solving.
            </p>
            <h2>Education</h2>
            <ul>
                <li>
                    <strong>Università Suor Orsola Benincasa</strong> (Naples, Italy) – MA, Public and Business Communication, Cum Laude (Oct 2024)
                    <ul>
                        <li>
                        <strong>Awards:</strong> won the “best branding strategy” award for advising a generative AI player (Logogramma), in targeting the healthcare market in their branding strategy based on value proposition/curve analysis, and reference customers’ benchmark.
                        </li>
                        <li>
                        <strong>Extracurricular:</strong> elaborated the branding strategy for a tour operator targeting customer base expansion, covering end customer profiling, planning (PED), social media, Gantt, and content creation.
                        </li>
                    </ul>
                </li>

                <li>
                    <strong>Apple Developer Academy</strong> (Naples, Italy) - Professional Certificate in App Development (Jun 2023)
                    <ul>
                        <li>Won "The Big Hack" Hackathon for designing the interface of a wearable medical device.</li>
                        <li>Developed app designs using Scrum/Agile methodology, including applications for color blindness support and contraceptive tracking.</li>
                    </ul>
                </li>
                <li>
                    <strong>Apple Foundation Program</strong> (Naples, Italy) - Certificate of Attendance (Feb 2022)
                    <ul>
                        <li>Developed an iOS app prototype focused on intrusive thoughts using cognitive ergonomics techniques.</li>
                    </ul>
                </li>
                <li>
                    <strong>Università di Pavia</strong> (Pavia, Italy) - BA in Public and Business Communication (Oct 2021)
                    <ul>
                        <li>Participated in a research workshop on identity, digital reputation, and personal branding.</li>
                    </ul>
                </li>
            </ul>

            <h2>Work Experience</h2>
            <ul>
                <li>
                    <strong>Municipality of Naples</strong> (Naples, Italy) - Civil Service (Sep 2024 - Ongoing)
                    <ul>
                        <li>Planned and executed cultural initiatives like events and social media campaigns.</li>
                        <li>Organized HPV vaccine awareness events targeting young women.</li>
                        <li>Promoted the cultural hub/study area in a re-purposed building.</li>
                    </ul>
                </li>
                <li>
                    <strong>TED Talks - TED × Napoli</strong> (Naples, Italy) - Event Assistant (March 2024)
                    <ul>
                        <li>Supported online promotion, event management, guest reception, and logistics organization.</li>
                    </ul>
                </li>
            </ul>

            <h2>Additional Information</h2>
            <ul>
                <li><strong>Languages:</strong> English (C1 Advanced Level, Cambridge CAE), Italian (Native).</li>
                <li><strong>Computer Skills:</strong> Office Suite, ECDL Full Standard Level.</li>
                <li><strong>Interests:</strong> Volleyball (semi-professional level 2007-2018), motorsports, art.</li>
            </ul>

            {/* Optional: Add a call-to-action or contact info */}
            <div className="contact-info">
                <p>If you'd like to connect or learn more about my work:</p>
                <p>Email: marta.spaccapietra@gmail.com | LinkedIn: linkedin.com/in/marta-spaccapietra</p>
            </div>
        </div>
    );
};

export default About;
