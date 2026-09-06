'use client';

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="testimonials section-padding bg-img"
      data-scroll-index="4"
      data-overlay-dark="5"
      data-background="/img/slider/4.jpg"
      style={{ backgroundImage: "url('/img/slider/4.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="container">
        <div className="row">
          <div className="owl-carousel owl-theme col-md-12">
            <div className="item-box">
              <span className="quote">
                <img src="/img/quot.png" alt="Quote" />
              </span>
              <p>
                "Muhammad Farooq was an absolute joy to work with on our wedding day! His eye for detail and ability to capture natural expressions gave us memories we will treasure forever. Highly recommended!"
              </p>
              <div className="info">
                <div className="author-img">
                  <img src="/img/team/5.jpeg" alt="Ayesha & Hamza" />
                </div>
                <div className="cont">
                  <h6>Ayesha & Hamza</h6> <span>Wedding Shoot</span>
                </div>
              </div>
            </div>
            <div className="item-box">
              <span className="quote">
                <img src="/img/quot.png" alt="Quote" />
              </span>
              <p>
                "Working with Farooq on our commercial product shoot was an exceptional experience. Professional, punctual, and extremely talented with studio lighting and artistic framing."
              </p>
              <div className="info">
                <div className="author-img">
                  <img src="/img/team/6.jpeg" alt="Sara & Ali" />
                </div>
                <div className="cont">
                  <h6>Sara & Ali</h6> <span>Portrait & Editorial</span>
                </div>
              </div>
            </div>
            <div className="item-box">
              <span className="quote">
                <img src="/img/quot.png" alt="Quote" />
              </span>
              <p>
                "Farooq's fashion portfolio shoot exceeded all expectations. His creative guidance made everyone feel comfortable and brought out stunning visual storytelling."
              </p>
              <div className="info">
                <div className="author-img">
                  <img src="/img/team/7.jpeg" alt="Zainab & Bilal" />
                </div>
                <div className="cont">
                  <h6>Zainab & Bilal</h6> <span>Fashion Shoot</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
