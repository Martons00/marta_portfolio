import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase, faStar } from '@fortawesome/free-solid-svg-icons';
import './CSS/About.css'; // Import your CSS file for styling

const About = () => {
  return (
    <div >
      <h1>About Me</h1>
      <VerticalTimeline lineColor="#444">
        {/* Education */}
        <VerticalTimelineElement
          contentStyle={{ background: '#181818', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #181818' }}
          date="Oct 2024"
          iconStyle={{ background: '#ffe066', color: '#181818' }}
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
        >
          <h3>Suor Orsola Benincasa</h3>
          <h4>MA, Public & Business Communication</h4>
          <ul>
            <li>Best branding strategy award (AI, healthcare).</li>
            <li>Branding project for tour operator.</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: '#222', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #222' }}
          date="Jun 2023"
          iconStyle={{ background: '#2196f3', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
        >
          <h3>Apple Developer Academy</h3>
          <h4>App Development Certificate</h4>
          <ul>
            <li>Won "The Big Hack" Hackathon.</li>
            <li>Designed apps with Scrum/Agile.</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: '#222', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #222' }}
          date="Feb 2022"
          iconStyle={{ background: '#2196f3', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
        >
          <h3>Apple Foundation Program</h3>
          <h4>Certificate of Attendance</h4>
          <ul>
            <li>iOS app prototype on intrusive thoughts.</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: '#222', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #222' }}
          date="Oct 2021"
          iconStyle={{ background: '#2196f3', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
        >
          <h3>Università di Pavia</h3>
          <h4>BA, Public & Business Communication</h4>
          <ul>
            <li>Workshop on digital identity and branding.</li>
          </ul>
        </VerticalTimelineElement>

        {/* Work Experience */}
        <VerticalTimelineElement
          contentStyle={{ background: '#181818', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #181818' }}
          date="Sep 2024 - Ongoing"
          iconStyle={{ background: '#16cc52', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3>Municipality of Naples</h3>
          <h4>Civil Service</h4>
          <ul>
            <li>Organized events and campaigns.</li>
            <li>HPV awareness for young women.</li>
            <li>Promoted cultural hub.</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: '#181818', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #181818' }}
          date="Mar 2024"
          iconStyle={{ background: '#16cc52', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3>TED × Napoli</h3>
          <h4>Event Assistant</h4>
          <ul>
            <li>Helped with promotion and logistics.</li>
          </ul>
        </VerticalTimelineElement>

        {/* Additional Information */}
        <VerticalTimelineElement
          contentStyle={{ background: '#222', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #222' }}
          iconStyle={{ background: '#444', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faStar} />}
        >
          <h3>More</h3>
          <ul>
            <li><strong>Languages:</strong> English (C1), Italian (Native)</li>
            <li><strong>Skills:</strong> Office Suite, ECDL</li>
            <li><strong>Interests:</strong> Volleyball, motorsports, art</li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default About;
