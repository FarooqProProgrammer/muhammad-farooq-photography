'use client';

import Link from 'next/link';

export default function ServicesSection() {
  return (
    <>
      <section id="services" className="services section-padding bg-grey" data-scroll-index="2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title mb-30">
                <span>What We Do</span>
                <h2>Our Services</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mb-30">
              <div className="owl-carousel owl-theme text-center">
                <div className="item">
                  <div className="position-re o-hidden img-grayscale item-inner">
                    <img src="/img/services/2.jpg" alt="Portrait Photography" />
                  </div>
                  <div className="con">
                    <span className="category">
                      <Link href="/potrait-photography">Discover</Link>
                    </span>
                    <h5>
                      <Link href="/potrait-photography">Portrait Photography</Link>
                    </h5>
                    <Link href="/potrait-photography">
                      <i className="ti-arrow-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="position-re o-hidden img-grayscale item-inner">
                    <img src="/img/services/1.jpg" alt="Wedding Photography" />
                  </div>
                  <div className="con">
                    <span className="category">
                      <Link href="/wedding-photography">Discover</Link>
                    </span>
                    <h5>
                      <Link href="/wedding-photography">Wedding Photography</Link>
                    </h5>
                    <Link href="/wedding-photography">
                      <i className="ti-arrow-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="position-re o-hidden img-grayscale item-inner">
                    <img src="/img/services/3.jpg" alt="Travel Photography" />
                  </div>
                  <div className="con">
                    <span className="category">
                      <Link href="/travel-photography">Discover</Link>
                    </span>
                    <h5>
                      <Link href="/travel-photography">Travel Photography</Link>
                    </h5>
                    <Link href="/travel-photography">
                      <i className="ti-arrow-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="position-re o-hidden img-grayscale item-inner">
                    <img src="/img/services/4.jpg" alt="Still Life Photography" />
                  </div>
                  <div className="con">
                    <span className="category">
                      <Link href="/still-life-photography">Discover</Link>
                    </span>
                    <h5>
                      <Link href="/still-life-photography">Still Life Photography</Link>
                    </h5>
                    <Link href="/still-life-photography">
                      <i className="ti-arrow-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="position-re o-hidden img-grayscale item-inner">
                    <img src="/img/services/5.jpg" alt="Fashion Photography" />
                  </div>
                  <div className="con">
                    <span className="category">
                      <Link href="/fashion-photography">Discover</Link>
                    </span>
                    <h5>
                      <Link href="/fashion-photography">Fashion Photography</Link>
                    </h5>
                    <Link href="/fashion-photography">
                      <i className="ti-arrow-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="position-re o-hidden img-grayscale item-inner">
                    <img src="/img/services/6.jpg" alt="Sport Photography" />
                  </div>
                  <div className="con">
                    <span className="category">
                      <Link href="/sporty-photography">Discover</Link>
                    </span>
                    <h5>
                      <Link href="/sporty-photography">Sport Photography</Link>
                    </h5>
                    <Link href="/sporty-photography">
                      <i className="ti-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-right">
              <Link className="underline-text" href="/services">
                All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="line-vr-section"></div>
    </>
  );
}

