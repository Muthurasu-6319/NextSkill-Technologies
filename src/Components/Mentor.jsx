import React from 'react';
import MentorImg from '../assets/mentor.png';
import LogoImg from '../assets/Logo.png';
import './Mentor.css';

export default function Mentor() {
  const mentors = [
    { id: 1, name: "Pradeep kumar", role: "UI UX Mentor" },
    { id: 2, name: "Pradeep kumar", role: "UI UX Mentor" },
    { id: 3, name: "Pradeep kumar", role: "UI UX Mentor" },
    { id: 4, name: "Pradeep kumar", role: "UI UX Mentor" }
  ];

  return (
    <section className="mentorSection" id="mentors">
      <div className="mentorContent">
        <div className="mentorBadge">
          Mentors
        </div>

        <h2 className="mentorTitle">
          Learn Live with Industry Experts
        </h2>

        <div className="mentorGrid">
          {mentors.map((mentor) => (
            <div className="mentorCard" key={mentor.id}>
              <div className="mentorImageWrapper">
                <img src={MentorImg} alt={mentor.name} className="mentorProfileImage" />
              </div>

              <div className="mentorDetails">
                <h4 className="mentorName">{mentor.name}</h4>
                <span className="mentorRole">{mentor.role}</span>
                <div className="mentorLogoWrapper">
                  <img src={LogoImg} alt="NextSkill Logo" className="mentorCardLogo" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="mentorCallbackBtn" aria-label="Request a Callback">
          <span>Request a Callback</span>
          <svg viewBox="0 0 24 24" width="18" height="18" className="btnArrow">
            <path fill="currentColor" d="M16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8-1.41 1.41z"/>
          </svg>
        </button>
      </div>
    </section>
  );
}
