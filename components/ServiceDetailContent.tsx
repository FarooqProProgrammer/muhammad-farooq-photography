'use client';

import Link from 'next/link';
import Preloader from '@/components/Preloader';
import Header from '@/components/Header';
import PageBanner from '@/components/PageBanner';
import Footer from '@/components/Footer';
import PricingSection from '@/components/PricingSection';

interface ServiceDetailProps {
  title: string;
  bannerImg: string;
  galleryImages: string[];
  activeSlug: string;
}

export default function ServiceDetailContent({
  title,
  bannerImg,
  galleryImages,
  activeSlug,
}: ServiceDetailProps) {
  const servicesList = [
    { slug: 'potrait-photography', name: 'Portrait Photography' },
    { slug: 'wedding-photography', name: 'Wedding Photography' },
    { slug: 'travel-photography', name: 'Travel Photography' },
    { slug: 'still-life-photography', name: 'Still Life Photography' },
    { slug: 'fashion-photography', name: 'Fashion Photography' },
    { slug: 'sporty-photography', name: 'Sporty Photography' },
  ];

  return (
    <>
      <Preloader />
      <Header isSinglePage={false} />

      <PageBanner
        category="Services"
        categoryLink="/services"
        title={title}
        bgImage={bannerImg}
      />

      {/* Content */}
      <section className="services-page section-padding">
        <div className="container">
          <div className="row">
            {/* Main Content */}
            <div className="col-md-8">
              {/* Carousel / Images */}
              <div className="row">
                <div className="col-md-12 gallery-item">
                  <div className="owl-carousel owl-theme text-center">
                    {galleryImages.map((imgSrc, idx) => (
                      <div className="item" key={idx}>
                        <div className="gallery-item-inner">
                          <a href={imgSrc} title={title} className="img-grayscale img-zoom">
                            <div className="gallery-box">
                              <div className="gallery-img">
                                <img src={imgSrc} className="img-fluid mx-auto d-block" alt={`${title} ${idx + 1}`} />
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Text Description */}
              <div className="row">
                <div className="col-md-12 mb-30">
                  <h5>
                    Capturing timeless moments with technical mastery, artistic vision, and uncompromised creative quality.
                  </h5>
                  <p>
                    Every photo session is carefully tailored to reflect your unique story, brand aesthetic, or celebration style. From precise studio lighting to natural ambient setups, we ensure every detail is impeccably rendered.
                  </p>
                  <p>
                    Our professional post-processing highlights authentic colors, contrast, and depth without over-retouching, providing high-resolution digital galleries ready for print and media publishing.
                  </p>
                  <div className="dantext">
                    <ul>
                      <li>High-resolution master retouched digital images</li>
                      <li>Creative art direction and moodboard planning</li>
                      <li>Full online digital gallery access with high-speed download</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div className="row">
                <div className="col-md-12">
                  <h5>Frequently Asked Questions</h5>
                </div>
                <div className="col-md-12 faqs-accordion mb-30">
                  <div className="accordion">
                    <div className="item">
                      <div className="title">Can we meet you before we book?</div>
                      <div className="accordion-info active" style={{ display: 'none' }}>
                        <p>
                          Absolutely! We welcome in-person or virtual consultation meetings to discuss your shoot ideas, vision, and timeline requirements.
                        </p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="title">How will our pictures be delivered?</div>
                      <div className="accordion-info" style={{ display: 'none' }}>
                        <p>
                          All finalized photos are delivered via a secure, password-protected online gallery with options for instant full-resolution download.
                        </p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="title">Can we add extra hours to our session?</div>
                      <div className="accordion-info" style={{ display: 'none' }}>
                        <p>
                          Yes, additional coverage hours can easily be added on the day of the shoot or arranged beforehand.
                        </p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="title">Do you assist with session planning and location choice?</div>
                      <div className="accordion-info" style={{ display: 'none' }}>
                        <p>
                          We guide you through location scouting, wardrobe advice, and lighting schedules to ensure the best possible results.
                        </p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="title">How many edited images will we receive?</div>
                      <div className="accordion-info" style={{ display: 'none' }}>
                        <p>
                          The number of images depends on your chosen package, ranging from 50 to 250+ fully color-graded high-resolution photos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-md-4 sidebar-side">
              <aside className="sidebar blog-sidebar">
                <div className="sidebar-widget services">
                  <div className="widget-inner">
                    <div className="sidebar-title">
                      <h4>All Services</h4>
                    </div>
                    <ul>
                      {servicesList.map((item) => (
                        <li key={item.slug} className={activeSlug === item.slug ? 'active' : ''}>
                          <Link href={`/${item.slug}`}>{item.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="sidebar-widget services">
                  <div className="widget-inner">
                    <div className="sidebar-title">
                      <h4>Need Photography Help?</h4>
                    </div>
                    <p>
                      Have questions or want to discuss a customized package? Contact us directly and we'll be happy to assist you.
                    </p>
                    <div className="phone">
                      <a href="tel:923001234567">
                        <span className="icon ti-headphone-alt"></span>+92 300 1234567
                      </a>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <div className="line-vr-section"></div>

      <PricingSection />

      <Footer />
    </>
  );
}
