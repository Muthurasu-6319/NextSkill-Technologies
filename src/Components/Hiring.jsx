import React, { useState } from 'react';
import HiringImg from '../assets/hiring-companies-desktop 1.png';
import './Hiring.css';

export default function Hiring() {
  const [activeFaqId, setActiveFaqId] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "Q. What is a business agency?",
      answer: "A business agency is a professional service provider that helps organizations improve their operations, design digital solutions, and achieve sustainable growth through expert consultation."
    },
    {
      id: 2,
      question: "Q. What services does a business agency provide?",
      answer: "We offer comprehensive services including UI/UX design, custom software development, digital marketing, corporate training, and end-to-end IT career consultation."
    },
    {
      id: 3,
      question: "Q. How often should I update my website?",
      answer: "It is recommended to perform minor content updates weekly, technical SEO checks monthly, and a major layout or codebase audit every 1-2 years to keep up with industry standards."
    },
    {
      id: 4,
      question: "Q. How do subscriptions work?",
      answer: "Our subscription model provides dedicated hours of developer and designer bandwidth monthly, offering full flexibility and scaling according to your project milestones."
    },
    {
      id: 5,
      question: "Q. What other services are you compatible with?",
      answer: "We seamlessly integrate with cloud hosting platforms, modern database architectures, third-party analytics dashboards, and various corporate learning management systems."
    }
  ];

  const toggleFaq = (id) => {
    setActiveFaqId(activeFaqId === id ? null : id);
  };

  return (
    <section className="hiringSection" id="hiring">
      <div className="hiringContent">
        <div className="hiringBadge">
          Hiring Partner
        </div>

        <div className="hiringLogoWrapper">
          <img src={HiringImg} alt="Hiring Partners" className="hiringLogoImage" />
        </div>

        <div className="faqContainer">
          <div className="faqLeft">
            <div className="faqBadge">
              FAQ's
            </div>
            <h2 className="faqTitle">
              Frequently Asked Question
            </h2>
            <p className="faqDescription">
              Neque accumsan dolor nullam commodo. Odio massa nislkopul lamcorper suspendisse amet amet. Aenean suspendisse eget Fames eget eget nascetur omare.
            </p>
            <button className="faqCallbackBtn" aria-label="Request a Callback" onClick={() => window.showToast()}>
              <span>Request a Callback</span>
              <svg viewBox="0 0 24 24" width="18" height="18" className="btnArrow">
                <path fill="currentColor" d="M16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8-1.41 1.41z"/>
              </svg>
            </button>
          </div>

          <div className="faqRight">
            {faqs.map((faq) => {
              const isOpen = activeFaqId === faq.id;
              return (
                <div className={`faqItem ${isOpen ? 'faqItemActive' : ''}`} key={faq.id}>
                  <button className="faqHeader" onClick={() => toggleFaq(faq.id)} aria-expanded={isOpen}>
                    <span className="faqQuestion">{faq.question}</span>
                    <div className="faqToggleIconWrapper">
                      <svg viewBox="0 0 24 24" width="18" height="18" className="faqToggleIcon">
                        <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                      </svg>
                    </div>
                  </button>
                  <div className="faqBody">
                    <p className="faqAnswer">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
