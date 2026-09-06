import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import PageBanner from '@/components/PageBanner';
import Footer from '@/components/Footer';
import TeamSection from '@/components/TeamSection';

export default function TeamDetailsPage3() {
  return (
    <>
      <Preloader />
      <Navbar isSinglePage={false} />
      <Header isSinglePage={false} />

      {/* Team Banner */}
      <section className="ready banner-padding bg-img" data-overlay-dark="7" data-background="/img/slider/6.jpg">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mt-30 text-center">
              <div className="title">
                <span>
                  <a href="#">Photographer</a>
                </span>
                <h2>Awesome Team</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PageBanner
        category="Photographer"
        categoryLink="#"
        title="Awesome Team"
        bgImage="/img/slider/6.jpg"
      />

      <div className="line-vr-section"></div>

      {/* Team Details */}
      <section className="team-details section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-60">
              <div className="content">
                <div className="row">
                  <div className="col-md-5 img-grayscale">
                    <img src="/img/team/3.jpg" className="img-fluid" alt="Micheal Preston" />
                  </div>
                  <div className="col-md-7">
                    <div className="text-content v-middle">
                      <h3>Micheal Preston</h3>
                      <p>Event Photographer</p>
                      <p>
                        Micheal brings energy and technical expertise to corporate events, sports coverage, and large-scale galas, ensuring every key moment is documented.
                      </p>
                      <div className="team-details-info">
                        <ul className="info-list clearfix">
                          <li>
                            <div className="list-title">Age :</div>
                            <div className="list-description">32 Years</div>
                          </li>
                          <li>
                            <div className="list-title">Contact Me :</div>
                            <div className="list-description">
                              <a href="tel:+923001234567" tabIndex={0}>
                                +92 300 1234567
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="list-title">Experience :</div>
                            <div className="list-description">
                              <a href="#" tabIndex={0}>
                                7 Years
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="list-title">Email :</div>
                            <div className="list-description">
                              <a href="mailto:micheal@muhammadfarooq.com">micheal@muhammadfarooq.com</a>
                            </div>
                          </li>
                          <li>
                            <div className="list-title">Skills :</div>
                            <div className="list-description">Event Coverage, Action Photography</div>
                          </li>
                        </ul>
                      </div>
                      <ul className="social-icons square">
                        <li>
                          <a href="#">
                            <i className="ti-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="ti-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="ti-linkedin"></i>
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
              </div>
            </div>
          </div>
          <div className="row mb-60">
            <div className="col-md-12">
              <h2>My Background & Journey</h2>
              <p>
                Having covered major corporate conferences, sporting finals, and music festivals, Micheal excels in fast-paced environments requiring rapid focus and sharp timing.
              </p>
            </div>
            <div className="col-md-6">
              <div className="skills">
                <div className="skill-item">
                  <p>
                    Event Coverage <i>(92%)</i>
                  </p>
                  <div className="skill-progress">
                    <div className="progres" data-value="92%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <p>
                    Low-Light Performance <i>(88%)</i>
                  </p>
                  <div className="skill-progress">
                    <div className="progres" data-value="88%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <p>
                    Rapid Delivery Workflow <i>(90%)</i>
                  </p>
                  <div className="skill-progress">
                    <div className="progres" data-value="90%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="line-vr-section"></div>

      <TeamSection />

      <Footer />
    </>
  );
}
