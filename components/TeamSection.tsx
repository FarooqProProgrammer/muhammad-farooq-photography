'use client';

import Link from 'next/link';

export default function TeamSection() {
  return (
    <>
      <section id="team" className="team section-padding bg-grey" data-scroll-index="5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title mb-30">
                <span>Photographer</span>
                <h2>Awesome Team</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 owl-carousel owl-theme">
              <div className="item">
                <div className="img img-grayscale item-inner">
                  <Link href="/team-details">
                    <img src="/img/team/2.jpg" alt="Kristin Bowles" />
                  </Link>
                </div>
                <div className="info">
                  <h5>Kristin Bowles</h5>
                  <h6>Wedding Photographer</h6>
                  <div className="social valign">
                    <div className="full-width">
                      <a href="#">
                        <i className="ti-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="ti-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="ti-linkedin"></i>
                      </a>
                      <p>kristin@muhammadfarooq.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="img img-grayscale item-inner">
                  <Link href="/team-details2">
                    <img src="/img/team/1.jpg" alt="Nelsan Compton" />
                  </Link>
                </div>
                <div className="info">
                  <h5>Nelsan Compton</h5>
                  <h6>Model Photographer</h6>
                  <div className="social valign">
                    <div className="full-width">
                      <a href="#">
                        <i className="ti-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="ti-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="ti-linkedin"></i>
                      </a>
                      <p>nelsan@muhammadfarooq.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="img img-grayscale item-inner">
                  <Link href="/team-details3">
                    <img src="/img/team/3.jpg" alt="Micheal Preston" />
                  </Link>
                </div>
                <div className="info">
                  <h5>Micheal Preston</h5>
                  <h6>Event Photographer</h6>
                  <div className="social valign">
                    <div className="full-width">
                      <a href="#">
                        <i className="ti-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="ti-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="ti-linkedin"></i>
                      </a>
                      <p>micheal@muhammadfarooq.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="line-vr-section"></div>
    </>
  );
}

