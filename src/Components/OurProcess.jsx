import React, { useState } from 'react';
import './OurProcess.css';
import OurProcessImage from '../assets/OurProcess.png';

export default function OurProcess() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      name: 'Ideate',
      badge: '💡 Idea',
      title: 'Ideate',
      description: 'Ideation is a creative process where designers generate ideas in sessions brainstorming, worst possible idea.',
      shortDesc: 'We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.',
      pills: ['🧠 Brainstorming', '📝 planning', '🌈 Creative'],
      icon: (
        <svg className="stepIcon" viewBox="0 0 24 24" width="18" height="18">
          <path d="M12 2.2c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l2.59-2.59c1.54 1.23 3.49 1.97 5.65 1.97 4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z" fill="currentColor"/>
          <path d="M12 6c-2.76 0-5 2.24-5 5h2c0-1.66 1.34-3 3-3V6z" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 2,
      name: 'Design',
      badge: '🎨 Figma',
      title: 'Design',
      description: 'UI/UX design shapes the product identity, defining colors, layout components, and typography for a pristine user experience.',
      shortDesc: 'We craft visually stunning, highly intuitive interfaces that elevate user engagement and reflect your unique brand identity.',
      pills: ['🎨 Layouts', '✨ Components', '📐 Typography'],
      icon: (
        <svg className="stepIcon" viewBox="0 0 24 24" width="18" height="18">
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 3,
      name: 'Develop',
      badge: '💻 Code',
      title: 'Develop',
      description: 'Development translates mockups into functional, blazing-fast, and secure web or mobile interfaces using cutting-edge frameworks.',
      shortDesc: 'Our developers build clean, maintainable, and high-performance applications tailored to scale smoothly.',
      pills: ['⚡ Performance', '🛡️ Security', '🔌 APIs'],
      icon: (
        <svg className="stepIcon" viewBox="0 0 24 24" width="18" height="18">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 4,
      name: 'Test',
      badge: '🔍 Quality',
      title: 'Test',
      description: 'Testing ensures cross-device compatibility, lightning-fast response times, and a totally bug-free user flow.',
      shortDesc: 'We conduct rigorous quality assurance testing to eliminate bugs and guarantee a smooth, flawless release.',
      pills: ['🐛 Bug Hunting', '📱 Responsive', '📈 Speed Check'],
      icon: (
        <svg className="stepIcon" viewBox="0 0 24 24" width="18" height="18">
          <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 5,
      name: 'Launch',
      badge: '🚀 Deploy',
      title: 'Launch',
      description: 'Launch moves your production build to safe, high-speed servers, setting up domain links and analytics.',
      shortDesc: 'We handle deployment and cloud configuration, ensuring a flawless launch and seamless transition to production.',
      pills: ['☁️ Cloud', '📊 SEO Setup', '🛡️ SSL Certs'],
      icon: (
        <svg className="stepIcon" viewBox="0 0 24 24" width="18" height="18">
          <path d="M12 2s0 2.22-2.12 5.09C8.35 9.28 6 11.23 6 13.5 6 16.8 8.69 19.5 12 19.5s6-2.7 6-6c0-2.27-2.35-4.22-3.88-6.41C12 4.22 12 2 12 2zm0 15c-1.93 0-3.5-1.57-3.5-3.5 0-1.33.93-2.58 2.05-4.18C11.35 8.21 12 6.94 12 6.94s.65 1.27 1.45 2.38c1.12 1.6 2.05 2.85 2.05 4.18 0 1.93-1.57 3.5-3.5 3.5z" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 6,
      name: 'Support',
      badge: '🛠️ 24/7 Care',
      title: 'Support',
      description: 'Support ensures continuous maintenance, security updates, feature improvements, and direct developer support whenever needed.',
      shortDesc: 'We provide 24/7 technical support, updates, and maintenance to keep your product performing at its peak.',
      pills: ['🔄 Upgrades', '🤝 Direct Help', '🛡️ Backups'],
      icon: (
        <svg className="stepIcon" viewBox="0 0 24 24" width="18" height="18">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-2h2v2zm1.07-7.75l-.9.92C12.45 11.9 12 12.5 12 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z" fill="currentColor"/>
        </svg>
      )
    }
  ];

  const currentStep = steps.find(s => s.id === activeStep) || steps[0];

  return (
    <section className="ourProcessSection" id="process">
      <div className="ourProcessContent">
        <div className="ourProcessBadge">
          Our process
        </div>

        <h2 className="ourProcessTitle">
          Product creation journey.
        </h2>

        <p className="ourProcessSubtitle">
          Our product development process
        </p>

        <div className="processGrid">
          <div className="timelineContainer">
            {steps.map((step, idx) => {
              const isActive = step.id === activeStep;
              return (
                <div 
                  key={step.id} 
                  className={`timelineStep ${isActive ? 'activeTimelineStep' : ''}`}
                  onClick={() => setActiveStep(step.id)}
                >
                  <div className="stepIndicator">
                    <div className={`stepCircle ${isActive ? 'activeStepCircle' : ''}`}>
                      {step.id}
                    </div>
                    {idx < steps.length - 1 && (
                      <div className={`stepLine ${isActive ? 'activeStepLine' : ''}`}></div>
                    )}
                  </div>
                  
                  <div className="stepDetails">
                    <div className={`stepHeaderPill ${isActive ? 'activeStepHeaderPill' : ''}`}>
                      {step.icon}
                      <span>{step.name}</span>
                    </div>
                    
                    {isActive && (
                      <p className="stepDescriptionText">
                        {step.shortDesc}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="previewCardContainer">
            <div className="stackedCardUnderlayTwo"></div>
            <div className="stackedCardUnderlayOne"></div>
            
            <div className="previewCard">
              <div className="previewCardDetails">
                <div className="previewCardHeader">
                  <span className="previewCardTitleIcon">💡</span>
                  <h3 className="previewCardTitle">{currentStep.title}</h3>
                  <span className="previewCardBadge">{currentStep.badge}</span>
                </div>
                
                <div className="previewCardDescriptionWrapper">
                  <p className="previewCardDescription">
                    {currentStep.description}
                  </p>
                  {currentStep.id === 1 && <span className="floatingQuestion">?</span>}
                </div>

                <div className="previewCardPills">
                  {currentStep.pills.map((pill, pIdx) => (
                    <span key={pIdx} className={`previewPill ${pIdx === 0 ? 'darkPreviewPill' : ''}`}>
                      {pill}
                    </span>
                  ))}
                  {currentStep.id === 1 && (
                    <span className="floatingStars">
                      <svg viewBox="0 0 24 24" width="12" height="12">
                        <path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4-6.2-4.5h7.6z" fill="#ffb800"/>
                      </svg>
                    </span>
                  )}
                </div>
              </div>

              <div className="previewCardGraphic">
                <div className="staticProcessWrapper">
                  <img src={OurProcessImage} className="staticProcessImage" alt="Process illustration" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
