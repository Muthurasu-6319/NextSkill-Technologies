import React from 'react';
import FooterLogo from '../assets/Logo.png';
import QRCode from '../assets/QR.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footerWrapper" id="footer">

      <div className="footerCta">
        <div className="footerCtaLeft">
          <h2 className="footerCtaHeading">
            Your Solutions <span className="footerCtaHighlight">Start Here!</span>
          </h2>
          <p className="footerCtaSubtext">
            Tell us what you need, and we'll get in touch with the perfect solution
          </p>
        </div>
        <a href="#contact" className="footerCtaBtn" onClick={(e) => { e.preventDefault(); window.showToast(); }}>
          Enquiry Now
          <svg viewBox="0 0 24 24" width="18" height="18" className="footerCtaBtnIcon">
            <path fill="currentColor" d="M16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8-1.41 1.41z"/>
          </svg>
        </a>
      </div>

      <div className="footerMain">

        <div className="footerBrandCol">
          <img src={FooterLogo} alt="NextSkill Logo" className="footerLogoImg" id="footerLogoImg" />
          <div className="footerQrRow">
            <img src={QRCode} alt="Google Play QR" className="footerQrImg" />
          </div>
        </div>

        <div className="footerNavCol">
          <h4 className="footerColTitle">Services</h4>
          <ul className="footerNavList">
            <li><a href="#" className="footerNavLink">Web Development</a></li>
            <li><a href="#" className="footerNavLink">Mobile App Development</a></li>
            <li><a href="#" className="footerNavLink">Branding</a></li>
            <li><a href="#" className="footerNavLink">Graphic Designing</a></li>
            <li><a href="#" className="footerNavLink">UI UX Design</a></li>
            <li><a href="#" className="footerNavLink">Digital Marketing</a></li>
          </ul>
        </div>

        <div className="footerNavCol">
          <h4 className="footerColTitle">Education</h4>
          <ul className="footerNavList">
            <li><a href="#" className="footerNavLink">Academy</a></li>
            <li><a href="#" className="footerNavLink">Internship</a></li>
          </ul>
        </div>

        <div className="footerNavCol">
          <h4 className="footerColTitle">Quick Links</h4>
          <ul className="footerNavList">
            <li><a href="#" className="footerNavLink">About Us</a></li>
            <li><a href="#" className="footerNavLink">Services</a></li>
            <li><a href="#" className="footerNavLink">Blog</a></li>
            <li><a href="#" className="footerNavLink">Portfolio</a></li>
            <li><a href="#" className="footerNavLink">Contact Us</a></li>
          </ul>
        </div>

        <div className="footerContactCol">
          <h4 className="footerColTitle">For more details</h4>
          <ul className="footerContactList">
            <li className="footerContactItem">
              <svg viewBox="0 0 24 24" width="16" height="16" className="footerContactIcon">
                <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span>Pankaja Mill Road, Ramanathapuram (Opp.New Indian Express), Coimbatore-641045</span>
            </li>
            <li className="footerContactItem">
              <svg viewBox="0 0 24 24" width="16" height="16" className="footerContactIcon">
                <path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span>+91 9876543213<br/>+91 9876543234</span>
            </li>
            <li className="footerContactItem">
              <svg viewBox="0 0 24 24" width="16" height="16" className="footerContactIcon">
                <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>nextskilltechnologies@gmail.com</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="footerBottom">
        <div className="footerBottomLinks">
          <a href="#" className="footerBottomLink">Terms of Use*</a>
          <a href="#" className="footerBottomLink">Privacy Policy*</a>
        </div>

        <div className="footerSocials">
          <span className="footerSocialsLabel">Follow us</span>

          <a href="#" className="footerSocialBtn" aria-label="Facebook">
            <svg viewBox="0 0 24 24" width="16" height="16">
              <path fill="currentColor" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
          <a href="#" className="footerSocialBtn" aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="16" height="16">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
            </svg>
          </a>
          <a href="#" className="footerSocialBtn" aria-label="Twitter">
            <svg viewBox="0 0 24 24" width="16" height="16">
              <path fill="currentColor" d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
            </svg>
          </a>
          <a href="#" className="footerSocialBtn" aria-label="WhatsApp">
            <svg viewBox="0 0 24 24" width="16" height="16">
              <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
            </svg>
          </a>
          <a href="#" className="footerSocialBtn" aria-label="YouTube">
            <svg viewBox="0 0 24 24" width="16" height="16">
              <path fill="currentColor" d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
            </svg>
          </a>
        </div>
      </div>

    </footer>
  );
}
