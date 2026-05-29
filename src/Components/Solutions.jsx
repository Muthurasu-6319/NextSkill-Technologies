import React, { useState } from 'react';
import './Solutions.css';

export default function Solutions() {
  const [activeIndex, setActiveIndex] = useState(3);

  const items = [
    {
      id: 'software',
      name: 'Custom Software',
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32">
          <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" fill="currentColor"/>
          <path d="M12 8a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 'erp',
      name: 'ERP Integration',
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32">
          <path d="M12 2L2 7l10 5 10-5-10-5zm0 10L2 17l10 5 10-5-10-5z" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 'hr',
      name: 'HR Management',
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32">
          <path d="M12 7V3H2v18h20V7H12zm-2 12H4v-2h6v2zm0-4H4v-2h6v2zm0-4H4V7h6v2zm10 8h-8v-2h8v2zm0-4h-8v-2h8v2zm0-4h-8V9h8v2z" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 'crm',
      name: 'Enterprise Applications',
      icon: (
        <svg viewBox="0 0 24 24" width="38" height="38">
          <rect x="2" y="4" width="20" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
          <line x1="2" y1="10" x2="22" y2="10" stroke="currentColor" strokeWidth="2"/>
          <circle cx="6" cy="7" r="1" fill="currentColor"/>
          <circle cx="9" cy="7" r="1" fill="currentColor"/>
          <circle cx="12" cy="7" r="1" fill="currentColor"/>
          <text x="12" y="17" fontSize="5" fontWeight="bold" textAnchor="middle" fill="currentColor">CRM</text>
        </svg>
      )
    },
    {
      id: 'ecommerce',
      name: 'E-Commerce Store',
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32">
          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 'analytics',
      name: 'Data Analytics',
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 'saas',
      name: 'SaaS Platforms',
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32">
          <rect x="2" y="4" width="20" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
          <line x1="2" y1="9" x2="22" y2="9" stroke="currentColor" strokeWidth="2"/>
          <circle cx="5" cy="6.5" r="0.75" fill="currentColor"/>
          <circle cx="7.5" cy="6.5" r="0.75" fill="currentColor"/>
          <circle cx="10" cy="6.5" r="0.75" fill="currentColor"/>
          <line x1="6" y1="13" x2="18" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="6" y1="16" x2="14" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className="solutionsSection" id="solutions">
      <div className="solutionsContent">
        <div className="solutionsBadge">
          solutions
        </div>

        <h2 className="solutionsTitle">
          Tailored Services for Your Unique Needs
        </h2>

        <div className="solutionsGridContainer">
          <div className="solutionsGrid">
            {items.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={item.id}
                  className={`solutionItemWrapper ${isActive ? 'activeWrapper' : ''}`}
                >
                  {isActive && (
                    <div className="radarBackground">
                      <div className="pulseRing pulseOne"></div>
                      <div className="pulseRing pulseTwo"></div>
                      <div className="pulseRing pulseThree"></div>
                    </div>
                  )}

                  <button
                    className={`solutionCircle ${isActive ? 'activeCircle' : ''}`}
                    onClick={() => setActiveIndex(idx)}
                  >
                    {item.icon}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="activeSolutionBadgeContainer">
          <div className="activeSolutionBadge">
            {items[activeIndex].name}
          </div>
        </div>
      </div>
    </section>
  );
}
