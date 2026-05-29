import React from 'react';
import AcademyImg from '../assets/Programs/academy.png';
import InternshipImg from '../assets/Programs/internship.png';
import AwardIcon from '../assets/Programs/awardicon.png';
import './Programs.css';

export default function Programs() {
  return (
    <section className="programsSection" id="programs">
      <div className="programsContent">
        <div className="programsBadge">
          Programs
        </div>

        <h2 className="programsTitle">
          Boost Your Career with Industry-Ready Skills!
        </h2>

        <div className="introBox">
          <div className="introIconWrapper">
            <img src={AwardIcon} alt="Award Ribbon" className="introIcon" />
          </div>
          <div className="introTextWrapper">
            <p className="introDescription">
              Join our expert-led training programs designed to enhance your skills and prepare you for the real world.
            </p>
            <a href="#explore" className="introLink">
              View our program
              <svg viewBox="0 0 24 24" width="16" height="16" className="linkArrow">
                <path fill="currentColor" d="M16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8-1.41 1.41z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="programsGrid">
          <div className="programCard academyCard">
            <div className="cardGraphicWrapper">
              <img src={InternshipImg} alt="Academy Program" className="cardGraphic" />
            </div>

            <div className="cardBody">
              <h3 className="cardTitle">ACADEMY</h3>
              <p className="cardSubtitle">
                Learn like top IT and Achieve High-paid software
              </p>

              <div className="badgeList">
                <span className="badgeItem">POST 12TH / INTERMEDIATE</span>
                <span className="badgeItem">1ST, 2ND, 3RD YEARS COLLEGE STUDENTS</span>
              </div>

              <div className="metaRow">
                <div className="metaCol">
                  <span className="metaLabel">Next Batch</span>
                  <span className="metaValue">Start soon</span>
                </div>
                <div className="metaCol">
                  <span className="metaLabel">Limited seats</span>
                  <span className="metaValue">available</span>
                </div>
              </div>

              <button className="callBackButton" aria-label="Request call back">
                <span>Request to call back</span>
                <svg viewBox="0 0 24 24" width="18" height="18" className="phoneIcon">
                  <path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </button>

              <a href="#details" className="knowMoreLink">
                Know more
              </a>
            </div>
          </div>

          <div className="programCard internshipCard">
            <div className="cardGraphicWrapper">
              <img src={AcademyImg} alt="Internship Program" className="cardGraphic" />
            </div>

            <div className="cardBody">
              <h3 className="cardTitle">INTERNSHIP</h3>
              <p className="cardSubtitle">
                A Proven program to make you a IT professional
              </p>

              <div className="badgeList">
                <span className="badgeItem">GRADUATES</span>
                <span className="badgeItem">FINAL YEAR</span>
              </div>

              <div className="metaRow">
                <div className="metaCol">
                  <span className="metaLabel">Next Batch</span>
                  <span className="metaValue">Start soon</span>
                </div>
                <div className="metaCol">
                  <span className="metaLabel">Limited seats</span>
                  <span className="metaValue">available</span>
                </div>
              </div>

              <button className="callBackButton" aria-label="Request call back">
                <span>Request to call back</span>
                <svg viewBox="0 0 24 24" width="18" height="18" className="phoneIcon">
                  <path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </button>

              <a href="#details" className="knowMoreLink">
                Know more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
