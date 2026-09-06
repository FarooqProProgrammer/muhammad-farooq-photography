'use client';

export default function ContactSection() {
  return (
    <>
      <section id="contact" className="contact section-padding" data-scroll-index="8">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <span>Location</span>
                <h2 className="">Contact Us</h2>
              </div>
            </div>
            <div className="col-md-5 info mb-30">
              <p>
                I'd love to hear from you! Please fill out the form below or send a note directly with as much details as
                possible to info@muhammadfarooq.com
              </p>
              <div className="item">
                <p>
                  <b>Phone</b> : +1 650-444-0000
                </p>
              </div>
              <div className="item">
                <p>
                  <b>Address</b> : Karachi, Pakistan
                </p>
              </div>
              <div className="item">
                <p>
                  <b>Email</b> : info@muhammadfarooq.com
                </p>
              </div>
              <div className="item">
                <p>
                  <b>Google Map</b> :{' '}
                  <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
                    Get Directions
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-5 offset-md-2">
              <p>
                <b>Get in touch</b>
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Your Name *" required />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Your Email" />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      cols={30}
                      rows={4}
                      className="form-control"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <button className="btn float-btn flat-btn" type="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="line-vr-section"></div>
    </>
  );
}

