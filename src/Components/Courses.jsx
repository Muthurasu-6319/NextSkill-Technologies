import React from 'react';
import CoursesImg from '../assets/courses.png';
import './Courses.css';

export default function Courses() {
  return (
    <section className="coursesSection" id="courses">
      <div className="coursesContent">
        <div className="coursesBadge">
          Explore courses
        </div>

        <h2 className="coursesTitle">
          Designed to transform you into a highly skilled Software Professional
        </h2>

        <div className="coursesGrid">
          <div className="courseCard">
            <div className="courseGraphicWrapper">
              <img src={CoursesImg} alt="Design Course" className="courseGraphic" />
              <div className="graphicOverlayBadge designBadge">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                </svg>
              </div>
            </div>

            <div className="courseCardBody">
              <h3 className="courseTitle">Design</h3>
              <p className="courseDescription">
                design fundamentals, typography, illustration, branding, and user experience design.
              </p>

              <div className="coursePoints">
                <div className="pointItem">
                  <div className="pointIconWrapper">
                    <svg viewBox="0 0 24 24" width="16" height="16">
                      <path fill="currentColor" d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/>
                    </svg>
                  </div>
                  <span className="pointText">UI/UX Design</span>
                </div>

                <div className="pointItem">
                  <div className="pointIconWrapper">
                    <svg viewBox="0 0 24 24" width="16" height="16">
                      <path fill="currentColor" d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.22-1.19-.57-1.67-.11-.16-.16-.36-.16-.57 0-.55.45-1 1-1h1.73c3.02 0 5.5-2.48 5.5-5.5C22 6.56 17.51 2 12 2zm-4.5 9c-.83 0-1.5-.67-1.5-1.5S6.67 7 7.5 7 9 7.67 9 8.5 8.33 11 7.5 11zm3-3C9.67 8 9 7.33 9 6.5S9.67 5 10.5 5s1.5.67 1.5 1.5S11.33 8 10.5 8zm4 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 3c-.83 0-1.5-.67-1.5-1.5S16.67 7 17.5 7s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                    </svg>
                  </div>
                  <span className="pointText">Graphic Design</span>
                </div>

                <div className="pointItem">
                  <div className="pointIconWrapper">
                    <svg viewBox="0 0 24 24" width="16" height="16">
                      <path fill="currentColor" d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 8.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75z"/>
                    </svg>
                  </div>
                  <span className="pointText">Branding</span>
                </div>
              </div>

              <button className="courseButton" aria-label="Request callback" onClick={() => window.showToast()}>
                <span>Request to call back</span>
                <svg viewBox="0 0 24 24" width="18" height="18" className="phoneIcon">
                  <path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </button>

              <a href="#more" className="viewMoreLink">
                View more
              </a>
            </div>
          </div>

          <div className="courseCard">
            <div className="courseGraphicWrapper">
              <img src={CoursesImg} alt="Development Course" className="courseGraphic" />
              <div className="graphicOverlayBadge devBadge">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                </svg>
              </div>
            </div>

            <div className="courseCardBody">
              <h3 className="courseTitle">Development</h3>
              <p className="courseDescription">
                help you learn the skills and knowledge needed to work in web development, design, and other related fields
              </p>

              <div className="coursePoints">
                <div className="pointItem">
                  <div className="pointIconWrapper">
                    <svg viewBox="0 0 24 24" width="16" height="16">
                      <path fill="currentColor" d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                    </svg>
                  </div>
                  <span className="pointText">Python Full Stack</span>
                </div>

                <div className="pointItem">
                  <div className="pointIconWrapper">
                    <svg viewBox="0 0 24 24" width="16" height="16">
                      <path fill="currentColor" d="M12 2C6.48 2 2 4.02 2 6.5v11c0 2.48 4.48 4.5 10 4.5s10-2.02 10-4.5v-11C22 4.02 17.52 2 12 2zm0 18c-4.42 0-8-1.5-8-3v-2.18c1.79.9 4.73 1.48 8 1.48s6.21-.58 8-1.48V17c0 1.5-3.58 3-8 3zm0-5c-4.42 0-8-1.5-8-3v-2.18c1.79.9 4.73 1.48 8 1.48s6.21-.58 8-1.48V12c0 1.5-3.58 3-8 3zm0-5c-4.42 0-8-1.5-8-3s3.58-3 8-3 8 1.5 8 3-3.58 3-8 3z"/>
                    </svg>
                  </div>
                  <span className="pointText">PHP Full Stack</span>
                </div>

                <div className="pointItem">
                  <div className="pointIconWrapper">
                    <svg viewBox="0 0 24 24" width="16" height="16">
                      <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    </svg>
                  </div>
                  <span className="pointText">Javascript Full Stack</span>
                </div>
              </div>

              <button className="courseButton" aria-label="Request callback" onClick={() => window.showToast()}>
                <span>Request to call back</span>
                <svg viewBox="0 0 24 24" width="18" height="18" className="phoneIcon">
                  <path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </button>

              <a href="#more" className="viewMoreLink">
                View more
              </a>
            </div>
          </div>

          <div className="courseCard">
            <div className="courseGraphicWrapper">
              <img src={CoursesImg} alt="Digital Marketing Course" className="courseGraphic" />
              <div className="graphicOverlayBadge marketingBadge">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3 12H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1zm0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1zm0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1z"/>
                </svg>
              </div>
            </div>

            <div className="courseCardBody">
              <h3 className="courseTitle">Digital Marketing</h3>
              <p className="courseDescription">
                The use of the internet to promote brands and connect with potential customers, marketing
              </p>

              <div className="coursePoints">
                <div className="pointItem">
                  <div className="pointIconWrapper">
                    <svg viewBox="0 0 24 24" width="16" height="16">
                      <path fill="currentColor" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                    </svg>
                  </div>
                  <span className="pointText">SEO</span>
                </div>

                <div className="pointItem">
                  <div className="pointIconWrapper">
                    <svg viewBox="0 0 24 24" width="16" height="16">
                      <path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </div>
                  <span className="pointText">Social Media Marketing</span>
                </div>

                <div className="pointItem">
                  <div className="pointIconWrapper">
                    <svg viewBox="0 0 24 24" width="16" height="16">
                      <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                    </svg>
                  </div>
                  <span className="pointText">Performance Marketing</span>
                </div>
              </div>

              <button className="courseButton" aria-label="Request callback" onClick={() => window.showToast()}>
                <span>Request to call back</span>
                <svg viewBox="0 0 24 24" width="18" height="18" className="phoneIcon">
                  <path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </button>

              <a href="#more" className="viewMoreLink">
                View more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
