import React from 'react';
import './Recognised.css';
import RecognisedLogos from '../assets/recognised-by-logos 1.png';

export default function Recognised() {
  return (
    <section className="recognised">
      <div className="recognisedContent">
        <div className="recognisedBadge">
          Recognised by
        </div>

        <div className="logoContainer">
          <img src={RecognisedLogos} alt="Recognised Logos" className="RecognisedLogosImage" />
        </div>
      </div>
    </section>
  );
}
