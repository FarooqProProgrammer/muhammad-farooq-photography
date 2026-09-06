import Preloader from '@/components/Preloader';
import Header from '@/components/Header';
import PageBanner from '@/components/PageBanner';
import Footer from '@/components/Footer';
import TeamSection from '@/components/TeamSection';

export default function TeamDetailsPage2() {
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
                    <img src="/img/team/1.jpg" className="img-fluid" alt="Nelsan Compton" />
                  </div>
                  <div className="col-md-7">
                    <div className="text-content v-middle">
                      <h3>Nelsan Compton</h3>
                      <p>Model Photographer</p>
                      <p>
                        Nelsan leads creative fashion and editorial model shoots, focusing on high-concept studio lighting, bold posing, and contemporary aesthetic styles.
                      </p>
                      <div className="team-details-info">
                        <ul className="info-list clearfix">
                          <li>
                            <div className="list-title">Age :</div>
                            <div className="list-description">28 Years</div>
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
                                5 Years
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="list-title">Email :</div>
                            <div className="list-description">
                              <a href="mailto:nelsan@muhammadfarooq.com">nelsan@muhammadfarooq.com</a>
                            </div>
                          </li>
                          <li>
                            <div className="list-title">Skills :</div>
                            <div className="list-description">Fashion Photography, Studio Lighting</div>
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
                With a background in fashion magazine photography and commercial brand campaigns, Nelsan produces visuals that capture attention and elevate brand identity.
              </p>
            </div>
            <div className="col-md-6">
              <div className="skills">
                <div className="skill-item">
                  <p>
                    Studio Lighting <i>(95%)</i>
                  </p>
                  <div className="skill-progress">
                    <div className="progres" data-value="95%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <p>
                    Editorial Retouching <i>(88%)</i>
                  </p>
                  <div className="skill-progress">
                    <div className="progres" data-value="88%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <p>
                    Creative Concepts <i>(90%)</i>
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
