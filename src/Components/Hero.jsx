import React from 'react';
import './Hero.css';
import HeroImage from '../assets/Hero/Hero.png';

export default function Hero() {
  return (
    <section className="hero">
      <img src={HeroImage} className="heroShapeLeft" alt="Hero Shape Left" />
      <img src={HeroImage} className="heroShapeRight" alt="Hero Shape Right" />

      <div className="heroContent">
        <div className="heroBadge">
          <span className="badgeIcon">📢</span>
          <span className="badgeText">Digital marketing</span>
        </div>

        <h1 className="heroTitle">
          Boost Up Your Career through Enlightening Education Program
        </h1>

        <p className="heroText">
          Join Up at NextskillTechnologies for Well-organized Offline Training Program with Assured Placement Guarantee.
        </p>

        <div className="heroButtons">
          <a href="#callback" className="heroButtonPrimary">
            Request a Callback <span className="arrow">→</span>
          </a>
          <a href="#enquiry" className="heroButtonOutline">
            Enquiry now
          </a>
        </div>

        <div className="heroTrusted">
          <div className="avatarGroup">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80" alt="Client 1" className="avatar" />
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80" alt="Client 2" className="avatar" />
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80" alt="Client 3" className="avatar" />
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80" alt="Client 4" className="avatar" />
          </div>
          <span className="trustedText">Trusted by 500+ clients</span>
        </div>
      </div>
    </section>
  );
}
