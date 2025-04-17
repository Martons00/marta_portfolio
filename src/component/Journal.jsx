// JournalGrid.js
import React, { useEffect, useState } from 'react';
import './CSS/JournalGrid.css'; // Assicurati di avere il file CSS corretto

function Journal() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const journalItems = [
    {
      id: 1,
      title: "Things you don't know about me",
      size: 'big',
      type: 'main'
    },
    {
      id: 2,
      title: "Motorsport",
      size: 'big',
      type: 'main',
      note: "In questa sezione voglio aggiungere GIF di auto"
    },
    {
      id: 3,
      title: "Volleyball",
      size: 'small',
      type: 'interest'
    },
    {
      id: 4,
      title: "Arts",
      size: 'small',
      type: 'interest'
    },
    {
      id: 5,
      title: "TV series",
      size: 'small',
      type: 'interest'
    },
    // Puoi aggiungere altre card vuote o con contenuti extra
  ];

  return (
    <div className="journal-container">
      <div className="journal-header">
        <span className="journal-title">JOURNAL</span>
        <span className="journal-desc">
          (sezione dove aggiungere <b>interessi</b> + <b>soft skills</b> o <b>skills in generale</b>)
        </span>
      </div>
      <div className="journal-grid">
        <div className="journal-row">
          <div className={`journal-card big ${animate ? 'fade-in-up' : ''}`}>
            <span className="card-title">Things you don't know<br />about me</span>
          </div>
          <div className={`journal-card big ${animate ? 'fade-in-up' : ''}`}>
            <span className="card-title">Motorsport</span>
            <span className="card-note">In questa sezione voglio aggiungere GIF di auto</span>
          </div>
        </div>
        <div className="journal-row">
          <div className={`journal-card small ${animate ? 'fade-in-up' : ''}`}>
            <span className="card-title">Volleyball</span>
          </div>
          <div className={`journal-card small ${animate ? 'fade-in-up' : ''}`}>
            <span className="card-title">Arts</span>
          </div>
          <div className={`journal-card small ${animate ? 'fade-in-up' : ''}`}>
            <span className="card-title">TV series</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Journal;
