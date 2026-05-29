import React, { useState } from 'react';
import './OurService.css';
import OurServiceImage from '../assets/OurService.png';

export default function OurService() {
  const [activeTab, setActiveTab] = useState('design');

  const services = {
    design: {
      title: 'UI/UX Design',
      description: 'Our skilled graphic designers craft compelling visuals that elevates your brand identity and leave a lasting impression',
      tags: ['User Interface', 'Web Designing', 'User Experience', 'User Research', 'Interaction design', 'Wireframing & Prototyping']
    },
    development: {
      title: 'Web & App Development',
      description: 'We build highly performant, responsive, and secure web and mobile applications tailored to your business needs',
      tags: ['React.js', 'Next.js', 'Node.js', 'Mobile Apps', 'API Integration', 'Cloud Solutions']
    },
    marketing: {
      title: 'Digital Marketing',
      description: 'Accelerate your brand growth and maximize ROI with our data-driven marketing campaigns and SEO optimization',
      tags: ['Search Engine Optimization', 'Social Media Marketing', 'Content Strategy', 'Pay Per Click', 'Google Analytics', 'Email Campaigns']
    }
  };

  const currentService = services[activeTab];

  return (
    <section className="ourServiceSection" id="services">
      <div className="ourServiceContent">
        <div className="ourServiceBadge">
          Our services
        </div>

        <h2 className="ourServiceTitle">
          Uncover the Strategies That Drive Success
        </h2>

        <div className="tabsContainer1">
          <div className="tabsWrapper">
            <button
              className={`tabButton ${activeTab === 'design' ? 'activeTabButton' : ''}`}
              onClick={() => setActiveTab('design')}
            >
              <svg className="tabIcon" viewBox="0 0 24 24" width="16" height="16">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/>
              </svg>
              Design
            </button>
            <button
              className={`tabButton ${activeTab === 'development' ? 'activeTabButton' : ''}`}
              onClick={() => setActiveTab('development')}
            >
              <svg className="tabIcon" viewBox="0 0 24 24" width="16" height="16">
                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" fill="currentColor"/>
              </svg>
              Development
            </button>
            <button
              className={`tabButton ${activeTab === 'marketing' ? 'activeTabButton' : ''}`}
              onClick={() => setActiveTab('marketing')}
            >
              <svg className="tabIcon" viewBox="0 0 24 24" width="16" height="16">
                <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" fill="currentColor"/>
              </svg>
              Digital marketing
            </button>
          </div>
        </div>

        <div className="serviceCard">
          <div className="serviceDetails">
            <h3 className="serviceTitle">{currentService.title}</h3>
            <p className="serviceDescription">{currentService.description}</p>
            
            <div className="tagsContainer">
              {currentService.tags.map((tag, idx) => (
                <span key={idx} className="tagItem">{tag}</span>
              ))}
            </div>

            <a href="#learnmore" className="learnMore">
              Learn more <span className="arrow">→</span>
            </a>
          </div>

          <div className="graphicContainer">
            <div className="graphicWrapper">
              {activeTab === 'design' && (
                <div className="staticGraphicWrapper">
                  <img src={OurServiceImage} className="staticGraphicImage" alt="UI/UX Design" />
                </div>
              )}

              {activeTab === 'development' && (
                <>
                  <div className="centerCard">
                    <svg viewBox="0 0 100 100" className="vectorSvg">
                      <rect x="15" y="20" width="70" height="60" rx="6" fill="none" stroke="#ef4b27" strokeWidth="4" />
                      <line x1="15" y1="35" x2="85" y2="35" stroke="#ef4b27" strokeWidth="2" />
                      <circle cx="25" cy="27.5" r="2.5" fill="#ef4b27" />
                      <circle cx="35" cy="27.5" r="2.5" fill="#ef4b27" />
                      <circle cx="45" cy="27.5" r="2.5" fill="#ef4b27" />
                      <path d="M 35 48 L 27 54 L 35 60 M 65 48 L 73 54 L 65 60 M 53 45 L 47 63" fill="none" stroke="#ef4b27" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="floatingIcon gitIcon">Git</div>
                  <div className="floatingIcon reactIcon">React</div>
                  <div className="floatingIcon nodeIcon">Node</div>
                  <div className="floatingIcon codeIcon">
                    <svg viewBox="0 0 24 24" width="16" height="16">
                      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" fill="#ffffff"/>
                    </svg>
                  </div>
                  <div className="avatarIcon devAvatar">
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#ffffff"/>
                    </svg>
                  </div>
                  <div className="toggleSwitch activeToggle">
                    <div className="toggleCircle"></div>
                  </div>
                  <div className="uiMiniCard devCard">
                    <div className="uiMiniCardHeader devHeader"></div>
                    <div className="uiMiniCardBody devBody"></div>
                  </div>
                </>
              )}

              {activeTab === 'marketing' && (
                <>
                  <div className="centerCard">
                    <svg viewBox="0 0 100 100" className="vectorSvg">
                      <line x1="20" y1="80" x2="80" y2="80" stroke="#ef4b27" strokeWidth="4" strokeLinecap="round" />
                      <line x1="20" y1="20" x2="20" y2="80" stroke="#ef4b27" strokeWidth="4" strokeLinecap="round" />
                      <rect x="28" y="55" width="10" height="25" rx="2" fill="#ef4b27" opacity="0.3" />
                      <rect x="44" y="40" width="10" height="40" rx="2" fill="#ef4b27" opacity="0.6" />
                      <rect x="60" y="25" width="10" height="55" rx="2" fill="#ef4b27" />
                      <path d="M 28 60 L 44 42 L 60 27" fill="none" stroke="#ef4b27" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M 50 27 L 60 27 L 60 37" fill="none" stroke="#ef4b27" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="floatingIcon adsIcon">Ads</div>
                  <div className="floatingIcon seoIcon">SEO</div>
                  <div className="floatingIcon roiIcon">ROI</div>
                  <div className="floatingIcon marketingIcon">
                    <svg viewBox="0 0 24 24" width="16" height="16">
                      <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" fill="#ffffff"/>
                    </svg>
                  </div>
                  <div className="avatarIcon mktAvatar">
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#ffffff"/>
                    </svg>
                  </div>
                  <div className="toggleSwitch activeToggle">
                    <div className="toggleCircle"></div>
                  </div>
                  <div className="uiMiniCard mktCard">
                    <div className="uiMiniCardHeader mktHeader"></div>
                    <div className="uiMiniCardBody mktBody"></div>
                  </div>
                </>
              )}
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
