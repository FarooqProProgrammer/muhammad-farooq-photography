'use client';

export default function AboutSection() {
  return (
    <>
      <section id="about" className="about clear section-padding" data-scroll-index="1">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2 text-center">
              <div className="title">
                <span>About Us</span>
                <h2>Muhammad Farooq</h2>
              </div>
              <p>
                Welcome to Muhammad Farooq Photography, based in Karachi, Pakistan. I specialize in capturing authentic moments,
                vibrant portraits, timeless wedding celebrations, and high-impact commercial imagery. With over a decade of creative
                experience, my mission is to transform fleeting emotions into timeless visual art.
              </p>
              <p className="mb-30">
                Whether documenting intimate ceremonies, fashion editorial shoots, or corporate campaigns, every frame is crafted with meticulous attention to lighting, composition, and emotional depth. I work closely with clients to tell their unique stories with elegance, passion, and artistic distinction.
              </p>
              <div className="row awards">
                <div className="col-md-12">
                  <div className="title">
                    <span>Our Awards</span>
                  </div>
                </div>
                <div className="col-md-12 owl-carousel owl-theme">
                  <div className="awards-logo">
                    <a href="#">
                      <img src="/img/awards/1.jpg" alt="Award 1" />
                    </a>
                  </div>
                  <div className="awards-logo">
                    <a href="#">
                      <img src="/img/awards/2.jpg" alt="Award 2" />
                    </a>
                  </div>
                  <div className="awards-logo">
                    <a href="#">
                      <img src="/img/awards/3.jpg" alt="Award 3" />
                    </a>
                  </div>
                  <div className="awards-logo">
                    <a href="#">
                      <img src="/img/awards/4.jpg" alt="Award 4" />
                    </a>
                  </div>
                  <div className="awards-logo">
                    <a href="#">
                      <img src="/img/awards/5.jpg" alt="Award 5" />
                    </a>
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
