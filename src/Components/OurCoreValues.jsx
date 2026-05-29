import React from 'react';
import './OurCoreValues.css';
import SecurityImg from '../assets/OurCoreValues/Security.png';
import CollabrationImg from '../assets/OurCoreValues/Collabration.png';
import CustomerFocusImg from '../assets/OurCoreValues/CustomerFocus.png';
import InnovationImg from '../assets/OurCoreValues/Innovation.png';
import OurCommitmentImg from '../assets/OurCoreValues/OurCommitment.png';
import QualityImg from '../assets/OurCoreValues/Quality.png';

export default function OurCoreValues() {
  return (
    <section className="ourCoreValuesSection" id="values">
      <div className="ourCoreValuesContent">
        <div className="ourCoreValuesBadge">
          Our Core values
        </div>

        <h2 className="ourCoreValuesTitle">
          Product Creation Journey.
        </h2>

        <p className="ourCoreValuesSubtitle">
          Our product development process
        </p>

        <div className="valuesGrid">
          <div className="columnLeft">
            <div className="statsRow">
              <div className="statCard">
                <span className="statNumber">50+</span>
                <span className="statBadge">🚩 Projects</span>
              </div>
              <div className="statCard">
                <span className="statNumber">41+</span>
                <span className="statBadge">👤 Happy clients</span>
              </div>
              <div className="statCard">
                <span className="statNumber">06+</span>
                <span className="statBadge">⭐ Years Expertise</span>
              </div>
            </div>

            <div className="wideCard">
              <div className="cardTextContent">
                <h3 className="cardTitle">Our Commitment</h3>
                <p className="cardText">Constantly evoving and creating and new solutions.</p>
                <div className="cardTags">
                  <span className="cardBadge">🚩 Projects</span>
                  <span className="cardBadge">🚩 Projects</span>
                </div>
              </div>
              <div className="cardImageContainer">
                <img src={OurCommitmentImg} className="cardImage" alt="Our Commitment" />
              </div>
            </div>

            <div className="wideCard">
              <div className="cardTextContent">
                <h3 className="cardTitle">Customer Focus</h3>
                <p className="cardText">Constantly evog and creating and new solutions.</p>
                <div className="cardTags">
                  <span className="cardBadge">🚩 Projects</span>
                  <span className="cardBadge">🚩 Projects</span>
                </div>
              </div>
              <div className="cardImageContainer">
                <img src={CustomerFocusImg} className="cardImage" alt="Customer Focus" />
              </div>
            </div>
          </div>

          <div className="columnMiddle">
            <div className="verticalCard">
              <div className="cardTextContent">
                <h3 className="cardTitle">Innovation</h3>
                <p className="cardText">Constantly evolving and creating and new solutions.</p>
              </div>
              <div className="cardImageContainer centeredImage">
                <img src={InnovationImg} className="cardImage verticalImage" alt="Innovation" />
              </div>
            </div>

            <div className="verticalCard">
              <div className="cardTextContent">
                <h3 className="cardTitle">Collaboration</h3>
                <p className="cardText">Constantly evolving and creating and new solutions.</p>
              </div>
              <div className="cardImageContainer centeredImage">
                <img src={CollabrationImg} className="cardImage verticalImage" alt="Collaboration" />
              </div>
            </div>
          </div>

          <div className="columnRight">
            <div className="verticalCard tallCard">
              <div className="cardTextContent">
                <h3 className="cardTitle">Quality</h3>
                <p className="cardText">Constantly evolving and creating and new solutions.</p>
              </div>
              <div className="cardImageContainer centeredImage tallImageContainer">
                <img src={QualityImg} className="cardImage verticalImage" alt="Quality" />
              </div>
            </div>

            <div className="verticalCard">
              <div className="cardTextContent">
                <h3 className="cardTitle">Security</h3>
                <p className="cardText">Constantly evolving and creating and new solutions.</p>
              </div>
              <div className="cardImageContainer centeredImage">
                <img src={SecurityImg} className="cardImage verticalImage" alt="Security" />
              </div>
            </div>
          </div>
        </div>

        <div className="callbackButtonContainer">
          <a href="#callback" className="callbackButton">
            Request a Callback <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
