'use client';

import Link from 'next/link';

export default function BlogSection() {
  return (
    <>
      <section id="blog" className="blog section-padding bg-grey" data-scroll-index="7">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title mb-30">
                <span>Read</span>
                <h2>Latest News</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="cover">
                <div className="cover-inner item bg-img" data-background="/img/services/3.jpg">
                  <div className="content">
                    <div className="info">
                      <Link href="/blog">
                        <span>
                          <i className="ti-time" aria-hidden="true"></i>26 December 2026
                        </span>{' '}
                        <span>
                          <i className="ti-comment-alt" aria-hidden="true"></i>0 Comments
                        </span>
                      </Link>
                    </div>
                    <Link href="/black-white-shots">
                      <h5>Black & White Shots</h5>
                    </Link>
                    <p>
                      Quisque luctus tincidunt enim dapibusen pharetra neue ultricies at. Morbi dapibus mauris id selerisque
                      placerat nula massa lacinia orci in facilisis nulla.
                    </p>{' '}
                    <Link className="underline-text" href="/black-white-shots">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="cover">
                <div className="cover-inner item bg-img" data-background="/img/services/1.jpg">
                  <div className="content">
                    <div className="info">
                      <Link href="/blog">
                        <span>
                          <i className="ti-time" aria-hidden="true"></i>18 December 2026
                        </span>{' '}
                        <span>
                          <i className="ti-comment-alt" aria-hidden="true"></i>0 Comments
                        </span>
                      </Link>
                    </div>
                    <Link href="/lovely-wedding">
                      <h5>Lovely Wedding</h5>
                    </Link>
                    <p>
                      Quisque luctus tincidunt enim dapibusen pharetra neue ultricies at. Morbi dapibus mauris id selerisque
                      placerat nula massa lacinia orci in facilisis nulla.
                    </p>{' '}
                    <Link className="underline-text" href="/lovely-wedding">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="cover">
                <div className="cover-inner item bg-img" data-background="/img/services/4.jpg">
                  <div className="content">
                    <div className="info">
                      <Link href="/blog">
                        <span>
                          <i className="ti-time" aria-hidden="true"></i>20 December 2026
                        </span>{' '}
                        <span>
                          <i className="ti-comment-alt" aria-hidden="true"></i>0 Comments
                        </span>
                      </Link>
                    </div>
                    <Link href="/product-shots">
                      <h5>Product Shots</h5>
                    </Link>
                    <p>
                      Quisque luctus tincidunt enim dapibusen pharetra neue ultricies at. Morbi dapibus mauris id selerisque
                      placerat nula massa lacinia orci in facilisis nulla.
                    </p>{' '}
                    <Link className="underline-text" href="/product-shots">
                      Read More
                    </Link>
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

