import React from 'react';
import Archive1 from '../assets/Archive/Archive1.png';
import Archive2 from '../assets/Archive/Archive2.png';
import './Archive.css';

export default function Archive() {
  const rowOneImages = [Archive1, Archive1, Archive1, Archive1, Archive1, Archive1, Archive1, Archive1];
  const rowTwoImages = [Archive2, Archive2, Archive2, Archive2, Archive2, Archive2, Archive2, Archive2];

  return (
    <section className="archiveSection" id="archive">
      <div className="archiveContent">
        <div className="archiveBadge">
          Professional Archive
        </div>

        <h2 className="archiveTitle">
          Turning Challenges into Opportunities with Smart Tech.
        </h2>

        <div className="marqueeContainer">
          <div className="marqueeTrack trackLeft">
            {rowOneImages.map((img, index) => (
              <div className="archiveCard" key={`row1-${index}`}>
                <img src={img} alt="Website Design Grow Your Roots" className="archiveImage" />
              </div>
            ))}
          </div>
        </div>

        <div className="marqueeContainer">
          <div className="marqueeTrack trackLeft">
            {rowTwoImages.map((img, index) => (
              <div className="archiveCard" key={`row2-${index}`}>
                <img src={img} alt="Website Design Avatar Public School" className="archiveImage" />
              </div>
            ))}
          </div>
        </div>

        <div className="archiveFooter">
          <div className="footerLeft">
            <span className="designerText">Designed & Built</span>
            <h3 className="brandTitle">By Nexskill</h3>
          </div>

          <div className="footerRight">
            <p className="descriptionText">
              Over 100 website have been designed and built by Nexskill. Here are a few of our favorites
            </p>

            <div className="buttonsGroup">
              <a href="https://wa.me/#" target="_blank" rel="noopener noreferrer" className="whatsappButton">
                <svg viewBox="0 0 24 24" width="20" height="20" className="btnIcon">
                  <path fill="currentColor" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.2 8.2 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.4-4.19-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.32a8.188 8.188 0 0 1-1.26-4.38c.01-4.52 3.71-8.21 8.25-8.21M8.66 7.62c-.15 0-.39.06-.59.27c-.2.22-.78.76-.78 1.85s.79 2.14.9 2.29c.11.15 1.52 2.33 3.71 3.27c.52.22.93.36 1.25.46c.52.17.99.14 1.36.09c.41-.06 1.25-.51 1.43-1c.17-.49.17-.92.12-1.01c-.05-.09-.18-.14-.39-.25c-.2-.11-1.2-.59-1.38-.66c-.19-.07-.32-.1-.46.1c-.14.2-.54.66-.66.8c-.12.14-.24.16-.45.05c-.21-.1-1.89-.7-2.9-1.6c-.78-.7-1.31-1.57-1.46-1.83c-.15-.26-.02-.4.09-.5c.1-.09.21-.24.32-.36c.11-.12.15-.2.22-.34c.07-.14.03-.26-.02-.36c-.05-.1-.46-1.1-.63-1.5c-.17-.4-.36-.34-.49-.35c-.13-.01-.28-.01-.43-.01Z"/>
                </svg>
                Whatsapp
              </a>

              <button className="callbackButton">
                Request a Callback
                <svg viewBox="0 0 24 24" width="20" height="20" className="btnIcon">
                  <path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
