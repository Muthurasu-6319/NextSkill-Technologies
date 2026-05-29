import React, { useState } from 'react';
import './Technologies.css';

export default function Technologies() {
  const [activeTab, setActiveTab] = useState('Frontend');

  const categories = [
    {
      id: 'Frontend',
      name: 'Frontend',
      title: 'Frontend',
      description: 'Crafting visually stunning and responsive interfaces that bring ideas to life. We ensure seamless user experiences across all devices.',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" className="cardTitleIcon">
          <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" fill="currentColor"/>
        </svg>
      ),
      techs: [
        {
          name: 'HTML/CSS',
          icon: (
            <svg viewBox="0 0 24 24" width="18" height="18" className="techIcon">
              <path d="M12 2L2 22h20L12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" fill="currentColor"/>
            </svg>
          )
        },
        {
          name: 'React JS',
          icon: (
            <svg viewBox="0 0 24 24" width="18" height="18" className="techIcon">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="currentColor"/>
            </svg>
          )
        },
        {
          name: 'Angular JS',
          icon: (
            <svg viewBox="0 0 24 24" width="18" height="18" className="techIcon">
              <path d="M12 2L2 5l2 12 8 5 8-5 2-12L12 2z" fill="currentColor"/>
            </svg>
          )
        },
        {
          name: 'Vue JS',
          icon: (
            <svg viewBox="0 0 24 24" width="18" height="18" className="techIcon">
              <path d="M12 2L2 22h4l6-10 6 10h4L12 2z" fill="currentColor"/>
            </svg>
          )
        }
      ]
    },
    {
      id: 'Backend',
      name: 'Backend',
      title: 'Backend',
      description: 'Building robust, scalable, and high-performance server-side architectures, secure databases, and fast API microservices.',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" className="cardTitleIcon">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-2h2v2zm0-4h-2V7h2v7z" fill="currentColor"/>
        </svg>
      ),
      techs: [
        {
          name: 'Node JS',
          icon: (
            <svg viewBox="0 0 24 24" width="18" height="18" className="techIcon">
              <path d="M12 2L2 22h20L12 2zm0 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill="currentColor"/>
            </svg>
          )
        },
        {
          name: 'Python',
          icon: (
            <svg viewBox="0 0 24 24" width="18" height="18" className="techIcon">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16h-2v-2h2v2zm2-4h-4V7h4v7z" fill="currentColor"/>
            </svg>
          )
        },
        {
          name: 'Java',
          icon: (
            <svg viewBox="0 0 24 24" width="18" height="18" className="techIcon">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-3-10 3z" fill="currentColor"/>
            </svg>
          )
        },
        {
          name: 'Go Lang',
          icon: (
            <svg viewBox="0 0 24 24" width="18" height="18" className="techIcon">
              <path d="M12 2L2 12h20L12 2zm0 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill="currentColor"/>
            </svg>
          )
        }
      ]
    },
    {
      id: 'Mobility',
      name: 'Mobility',
      title: 'Mobility',
      description: 'Creating high-performance, native-feeling mobile applications for both iOS and Android platforms with seamless smooth interfaces.',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" className="cardTitleIcon">
          <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" fill="currentColor"/>
        </svg>
      ),
      techs: [
        {
          name: 'React Native',
          icon: (
            <svg viewBox="0 0 24 24" width="18" height="18" className="techIcon">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="currentColor"/>
            </svg>
          )
        },
        {
          name: 'Flutter',
          icon: (
            <svg viewBox="0 0 24 24" width="18" height="18" className="techIcon">
              <path d="M12 2L2 22h20L12 2z" fill="currentColor"/>
            </svg>
          )
        },
        {
          name: 'Swift',
          icon: (
            <svg viewBox="0 0 24 24" width="18" height="18" className="techIcon">
              <path d="M12 2L2 8h20L12 2z" fill="currentColor"/>
            </svg>
          )
        },
        {
          name: 'Kotlin',
          icon: (
            <svg viewBox="0 0 24 24" width="18" height="18" className="techIcon">
              <path d="M12 2L2 14h20L12 2z" fill="currentColor"/>
            </svg>
          )
        }
      ]
    },
    {
      id: 'Fullstack',
      name: 'Full stack',
      title: 'Full stack',
      description: 'Bridging the gap between design and server architectures with integrated end-to-end full-stack engineering.',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" className="cardTitleIcon">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
        </svg>
      ),
      techs: [
        {
          name: 'MERN Stack',
          icon: (
            <svg viewBox="0 0 24 24" width="18" height="18" className="techIcon">
              <path d="M12 2L2 22h20L12 2z" fill="currentColor"/>
            </svg>
          )
        },
        {
          name: 'LAMP Stack',
          icon: (
            <svg viewBox="0 0 24 24" width="18" height="18" className="techIcon">
              <path d="M12 2L2 18h20L12 2z" fill="currentColor"/>
            </svg>
          )
        },
        {
          name: 'Next JS',
          icon: (
            <svg viewBox="0 0 24 24" width="18" height="18" className="techIcon">
              <path d="M12 2L2 12h20L12 2z" fill="currentColor"/>
            </svg>
          )
        },
        {
          name: 'Nest JS',
          icon: (
            <svg viewBox="0 0 24 24" width="18" height="18" className="techIcon">
              <path d="M12 2L2 8h20L12 2z" fill="currentColor"/>
            </svg>
          )
        }
      ]
    },
    {
      id: 'Ecommerce',
      name: 'E-Commerce & CMS',
      title: 'E-Commerce & CMS',
      description: 'Deploying high-converting digital storefronts and simple content management systems tailored to boost business sales.',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" className="cardTitleIcon">
          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" fill="currentColor"/>
        </svg>
      ),
      techs: [
        {
          name: 'Shopify',
          icon: (
            <svg viewBox="0 0 24 24" width="18" height="18" className="techIcon">
              <path d="M12 2L2 22h20L12 2zm0 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" fill="currentColor"/>
            </svg>
          )
        },
        {
          name: 'WooCommerce',
          icon: (
            <svg viewBox="0 0 24 24" width="18" height="18" className="techIcon">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="currentColor"/>
            </svg>
          )
        },
        {
          name: 'WordPress',
          icon: (
            <svg viewBox="0 0 24 24" width="18" height="18" className="techIcon">
              <path d="M12 2L2 8h20L12 2z" fill="currentColor"/>
            </svg>
          )
        },
        {
          name: 'Strapi',
          icon: (
            <svg viewBox="0 0 24 24" width="18" height="18" className="techIcon">
              <path d="M12 2L2 14h20L12 2z" fill="currentColor"/>
            </svg>
          )
        }
      ]
    },
    {
      id: 'Blockchain',
      name: 'Block Chain',
      title: 'Block Chain',
      description: 'Architecting decentralized consensus ledger platforms, web3 applications, and bulletproof smart contracts.',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" className="cardTitleIcon">
          <path d="M12 2L2 7l10 5 10-5-10-5zm0 10L2 17l10 5 10-5-10-5z" fill="currentColor"/>
        </svg>
      ),
      techs: [
        {
          name: 'Ethereum',
          icon: (
            <svg viewBox="0 0 24 24" width="18" height="18" className="techIcon">
              <path d="M12 2L2 12h20L12 2z" fill="currentColor"/>
            </svg>
          )
        },
        {
          name: 'Solidity',
          icon: (
            <svg viewBox="0 0 24 24" width="18" height="18" className="techIcon">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="currentColor"/>
            </svg>
          )
        },
        {
          name: 'Web3 JS',
          icon: (
            <svg viewBox="0 0 24 24" width="18" height="18" className="techIcon">
              <path d="M12 2L2 18h20L12 2z" fill="currentColor"/>
            </svg>
          )
        },
        {
          name: 'Rust',
          icon: (
            <svg viewBox="0 0 24 24" width="18" height="18" className="techIcon">
              <path d="M12 2L2 6h20L12 2z" fill="currentColor"/>
            </svg>
          )
        }
      ]
    },
    {
      id: 'Devops',
      name: 'DevOps & ML',
      title: 'DevOps & ML',
      description: 'Automating cloud CI/CD deployment pipelines alongside integration of cutting-edge AI and Machine Learning models.',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" className="cardTitleIcon">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-2h2v2zm0-4h-2V7h2v7z" fill="currentColor"/>
        </svg>
      ),
      techs: [
        {
          name: 'Docker',
          icon: (
            <svg viewBox="0 0 24 24" width="18" height="18" className="techIcon">
              <path d="M12 2L2 22h20L12 2z" fill="currentColor"/>
            </svg>
          )
        },
        {
          name: 'AWS',
          icon: (
            <svg viewBox="0 0 24 24" width="18" height="18" className="techIcon">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16h-2v-2h2v2zm2-4h-4V7h4v7z" fill="currentColor"/>
            </svg>
          )
        },
        {
          name: 'TensorFlow',
          icon: (
            <svg viewBox="0 0 24 24" width="18" height="18" className="techIcon">
              <path d="M12 2L2 14h20L12 2z" fill="currentColor"/>
            </svg>
          )
        },
        {
          name: 'PyTorch',
          icon: (
            <svg viewBox="0 0 24 24" width="18" height="18" className="techIcon">
              <path d="M12 2L2 8h20L12 2z" fill="currentColor"/>
            </svg>
          )
        }
      ]
    }
  ];

  const currentCategory = categories.find(c => c.name === activeTab) || categories[0];

  return (
    <section className="technologiesSection" id="technologies">
      <div className="technologiesContent">
        <div className="technologiesBadge">
          Technologies
        </div>

        <h2 className="technologiesTitle">
          Technologies we use
        </h2>

        <p className="technologiesSubtitle">
          Hire from our pool of 350+ specialized experts in web, mobile, and software engineering, specializing in the latest technologies and frameworks, ready to scale your development teams effortlessly
        </p>

        <div className="tabsOuterContainer">
          <div className="tabsContainer">
            {categories.map(category => {
              const isActive = category.name === activeTab;
              return (
                <button
                  key={category.id}
                  className={`tabPill ${isActive ? 'activeTabPill' : ''}`}
                  onClick={() => setActiveTab(category.name)}
                >
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        <div className="cardContainer">
          <div className="cardHeader">
            {currentCategory.icon}
            <h3 className="cardTitle">{currentCategory.title}</h3>
          </div>

          <p className="cardDescription">
            {currentCategory.description}
          </p>

          <div className="pillsGrid">
            {currentCategory.techs.map((tech, idx) => (
              <div key={idx} className="techPill">
                {tech.icon}
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="callbackButtonContainer">
          <button className="callbackButton">
            <span>Request a Callback</span>
            <svg className="arrow" viewBox="0 0 24 24" width="16" height="16">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
