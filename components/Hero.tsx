'use client';

export default function Hero() {
  return (
    <header
      className="header valign pos-pre bg-img parallaxie"
      data-scroll-index="0"
      data-overlay-dark="4"
      data-background="/img/slider/6.jpg"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 caption text-center">
            <div className="frame-inner">
              <h5 className="animate-box" data-animate-effect="fadeInUp">
                ESTD 2012
              </h5>
              <h1 className="animate-box" data-animate-effect="fadeInUp">
                Muhammad Farooq
              </h1>
              <h5 className="animate-box" data-animate-effect="fadeInUp">
                Photographer
              </h5>{' '}
              <span className="frame-1 animate-box" data-animate-effect="fadeInLeft"></span>{' '}
              <span className="frame-2 animate-box" data-animate-effect="fadeInRight"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="arrow bounce text-center">
              <a href="#" data-scroll-nav="1" className="">
                <i className="ti-angle-double-down"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

