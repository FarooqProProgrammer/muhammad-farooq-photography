'use client';

export default function PricingSection() {
  return (
    <>
      <section id="pricing" className="section-padding" data-scroll-index="6">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title mb-30">
                <span>Shooting</span>
                <h2>Pricing Tables</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="price-box">
                <div className="price-box-inner img-grayscale" style={{ backgroundImage: 'url(/img/price/1.jpg)' }}>
                  <ul>
                    <li className="pricing-title">
                      <h3 className="pricing-pt-title">Standart</h3>
                    </li>
                    <li className="pricing-prices">
                      <sup className="pricing-dolar">$</sup> <span className="pricing-price" style={{ color: '#ffffff' }}>300</span>
                    </li>
                    <li className="pricing-content">
                      <ul>
                        <li>3 Hours Session</li>
                        <li>Photo Editing</li>
                        <li>50 Digital Images</li>
                        <li>Online Gallery</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="price-box">
                <div className="price-box-inner" style={{ backgroundImage: 'url(/img/price/2.jpg)' }}>
                  <ul>
                    <li className="pricing-title">
                      <h3 className="pricing-pt-title">Premium</h3>
                    </li>
                    <li className="pricing-prices">
                      <sup className="pricing-dolar">$</sup> <span className="pricing-price" style={{ color: '#ffffff' }}>450</span>
                    </li>
                    <li className="pricing-content">
                      <ul>
                        <li>6 Hours Session</li>
                        <li>Photo Editing</li>
                        <li>100 Digital Images</li>
                        <li>Online Gallery</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="price-box">
                <div className="price-box-inner" style={{ backgroundImage: 'url(/img/price/3.jpg)' }}>
                  <ul>
                    <li className="pricing-title">
                      <h3 className="pricing-pt-title">Platinum</h3>
                    </li>
                    <li className="pricing-prices">
                      <sup className="pricing-dolar">$</sup> <span className="pricing-price" style={{ color: '#ffffff' }}>750</span>
                    </li>
                    <li className="pricing-content">
                      <ul>
                        <li>12 Hours Session</li>
                        <li>Photo Editing</li>
                        <li>250 Digital Images</li>
                        <li>Online Gallery</li>
                      </ul>
                    </li>
                  </ul>
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

