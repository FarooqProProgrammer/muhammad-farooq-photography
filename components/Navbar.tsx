'use client';

import Link from 'next/link';

interface NavbarProps {
  isSinglePage?: boolean;
}

export default function Navbar({ isSinglePage = true }: NavbarProps) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (typeof window !== 'undefined' && window.location.pathname === '/') {
      const element = document.getElementById(targetId);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        {/* Logo */}
        <div className="logo-wrapper">
          <Link className="logo" href="/">
            <h2
              style={{
                fontSize: '26px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: '#ffffff',
                margin: 0,
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
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="ti-menu"></i>
          </span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                href="/#about"
                onClick={(e) => handleScroll(e, 'about')}
                data-scroll-nav="1"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/services" data-scroll-nav="2">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                href="/#portfolio"
                onClick={(e) => handleScroll(e, 'portfolio')}
                data-scroll-nav="3"
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                href="/#testimonials"
                onClick={(e) => handleScroll(e, 'testimonials')}
                data-scroll-nav="4"
              >
                Testimonials
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                href="/#team"
                onClick={(e) => handleScroll(e, 'team')}
                data-scroll-nav="5"
              >
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                href="/#pricing"
                onClick={(e) => handleScroll(e, 'pricing')}
                data-scroll-nav="6"
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/blog" data-scroll-nav="7">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                href="/#contact"
                onClick={(e) => handleScroll(e, 'contact')}
                data-scroll-nav="8"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
