import Preloader from '@/components/Preloader';
import Header from '@/components/Header';
import PageBanner from '@/components/PageBanner';
import Footer from '@/components/Footer';
import TeamSection from '@/components/TeamSection';

export default function TeamDetailsPage1() {
  return (
    <>
      <Preloader />
      <Header isSinglePage={false} />

      <PageBanner
        category="Photographer"
        categoryLink="#"
        title="Awesome Team"
        bgImage="/img/slider/6.jpg"
      />

      {/* Team Details */}
      <section className="team-details section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-60">
              <div className="content">
                <div className="row">
                  <div className="col-md-5 img-grayscale">
                    <img src="/img/team/2.jpg" className="img-fluid" alt="Kristin Bowles" />
                  </div>
                  <div className="col-md-7">
                    <div className="text-content v-middle">
                      <h3>Kristin Bowles</h3>
                      <p>Wedding Photographer</p>
                      <p>
                        Kristin specializes in capturing romantic wedding ceremonies, candid celebration moments, and high-end couple portraiture with emotional clarity.
                      </p>
                      <div className="team-details-info">
                        <ul className="info-list clearfix">
                          <li>
                            <div className="list-title">Age :</div>
                            <div className="list-description">25 Years</div>
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
                                3 Years
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="list-title">Email :</div>
                            <div className="list-description">
                              <a href="mailto:kristin@muhammadfarooq.com">kristin@muhammadfarooq.com</a>
                            </div>
                          </li>
                          <li>
                            <div className="list-title">Skills :</div>
                            <div className="list-description">Wedding Photography, Lightroom</div>
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
                Having photographed over 100 weddings across multiple destinations, Kristin brings an artistic eye for natural lighting, elegant framing, and spontaneous moments that make every wedding unique.
              </p>
            </div>
            <div className="col-md-6">
              <div className="skills">
                <div className="skill-item">
                  <p>
                    Adobe Photoshop <i>(90%)</i>
                  </p>
                  <div className="skill-progress">
                    <div className="progres" data-value="90%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <p>
                    Color Grading <i>(85%)</i>
                  </p>
                  <div className="skill-progress">
                    <div className="progres" data-value="85%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <p>
                    Art Direction <i>(80%)</i>
                  </p>
                  <div className="skill-progress">
                    <div className="progres" data-value="80%"></div>
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
