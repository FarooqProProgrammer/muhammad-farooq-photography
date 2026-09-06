'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="brand">
              <Link className="logo" href="/">
                <h2
                  style={{
                    fontSize: '26px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    color: '#ffffff',
                    margin: '0 0 15px 0',
                    lineHeight: '1.1',
                    fontFamily: "'Barlow Condensed', sans-serif",
                  }}
                >
                  Muhammad Farooq
                  <span
                    style={{
                      display: 'block',
                      fontSize: '11px',
                      letterSpacing: '4px',
                      color: '#c5a47e',
                      textTransform: 'uppercase',
                      marginTop: '2px',
                      fontWeight: 500,
                    }}
                  >
                    Photography
                  </span>
                </h2>
              </Link>
              <p>
                Muhammad Farooq Photography captures high-end portraits, wedding stories, and creative editorial imagery in Karachi, Pakistan.
              </p>
            </div>
          </div>
          <div className="col-md-4 offset-md-1">
            <p>
              <b>Get in touch</b>
              <br /> E: info@muhammadfarooq.com
              <br /> P: +92 300 1234567
              <br /> A: Karachi, Pakistan
            </p>
          </div>
          <div className="col-md-3">
            <p className="mb-0">
              <b>Follow Us</b>
            </p>
            <p>Follow our latest projects, behind-the-scenes stories, and creative photography portfolio updates.</p>
            <ul className="footer-social-link">
              <li>
                <a href="#">
                  <i className="ti-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ti-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ti-pinterest"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="text-left">
                <p>©2026 Muhammad Farooq Photography. All rights reserved.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-right-left">
                <p>
                  <a href="#">Terms of use</a> <span>|</span> <a href="#">Privacy Policy</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
