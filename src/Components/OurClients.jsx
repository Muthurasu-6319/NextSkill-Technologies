import React, { useState } from 'react';
import OurClientsImg from '../assets/OurClients.png';
import Reviewer1 from '../assets/reviewer1.png';
import Reviewer2 from '../assets/reviewer2.png';
import Reviewer3 from '../assets/reviewer3.png';
import './OurClients.css';

export default function OurClients() {
  const [slideIndex, setSlideIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      quote: "I love how Finen simplifies my The detailed analytics and clear visualization in tools give me the to more confidence to make smart financial decisions.",
      name: "David Ramirez",
      company: "Abc Technologies",
      image: Reviewer1
    },
    {
      id: 2,
      quote: "I love how Finen simplifies my The detailed analytics and clear visualization in tools give me the to more confidence to make smart financial decisions.",
      name: "David Ramirez",
      company: "Abc Technologies",
      image: Reviewer2
    },
    {
      id: 3,
      quote: "I love how Finen simplifies my The detailed analytics and clear visualization in tools give me the to more confidence to make smart financial decisions.",
      name: "David Ramirez",
      company: "Abc Technologies",
      image: Reviewer3
    },
    {
      id: 4,
      quote: "I love how Finen simplifies my The detailed analytics and clear visualization in tools give me the to more confidence to make smart financial decisions.",
      name: "David Ramirez",
      company: "Abc Technologies",
      image: Reviewer1
    },
    {
      id: 5,
      quote: "I love how Finen simplifies my The detailed analytics and clear visualization in tools give me the to more confidence to make smart financial decisions.",
      name: "David Ramirez",
      company: "Abc Technologies",
      image: Reviewer2
    }
  ];

  const totalSlides = reviews.length;
  const visibleCards = 3;
  const maxIndex = totalSlides - visibleCards;

  const nextSlide = () => {
    setSlideIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setSlideIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="ourClientsSection" id="clients">
      <div className="ourClientsContent">
        <div className="clientsBadge">
          Our Clients
        </div>

        <div className="clientsImageContainer">
          <div className="clientsImageWrapper">
            <img src={OurClientsImg} alt="Our Clients Logos" className="clientsStripImage" />
          </div>
        </div>

        <div className="reviewsHeader">
          <div className="reviewsHeaderLeft">
            <div className="reviewsBadge">
              Our Clients Reviews
            </div>
            <h2 className="reviewsTitle">
              What our clients say about us
            </h2>
          </div>

          <div className="carouselControls">
            <button className="controlBtn" onClick={prevSlide} aria-label="Previous reviews">
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>
            <button className="controlBtn" onClick={nextSlide} aria-label="Next reviews">
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="currentColor" d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="reviewsViewport">
          <div
            className="reviewsTrack"
            style={{ transform: `translateX(-${slideIndex * (100 / visibleCards)}%)` }}
          >
            {reviews.map((review) => (
              <div className="reviewCard" key={review.id}>
                <div className="reviewCardInner">
                  <div className="reviewImageContainer">
                    <img src={review.image} alt={review.name} className="reviewProfileImage" />
                  </div>

                  <div className="reviewDetailsContainer">
                    <p className="reviewQuoteText">
                      "{review.quote}"
                    </p>

                    <div className="reviewerBottomRow">
                      <div className="reviewerMeta">
                        <h4 className="reviewerName">{review.name}</h4>
                        <span className="reviewerCompany">{review.company}</span>
                      </div>

                      <div className="reviewerLogoContainer">
                        <svg viewBox="0 0 24 24" width="26" height="26" className="reviewerCupLogo">
                          <path fill="currentColor" d="M2 21h18v-2H2v2zM20 8h-2V5h2v3zm2-5H2v13c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4v-3h2c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
