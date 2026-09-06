'use client';

import Preloader from '@/components/Preloader';
import Header from '@/components/Header';
import PageBanner from '@/components/PageBanner';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <>
      <Preloader />
      <Header isSinglePage={false} />

      <PageBanner
        category="Blog"
        categoryLink="/blog"
        title="Latest News & Articles"
        bgImage="/img/blog-banner.jpg"
      />

      {/* Blog Content & Sidebar */}
      <section id="blog" className="blog-page section-padding">
        <div className="container">
          <div className="row">
            {/* Main Content */}
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-12">
                  <div className="item">
                    <div className="post-img img-grayscale">
                      <Link href="/black-white-shots">
                        <img src="/img/blog/1.jpg" alt="Black & White Shots" />
                      </Link>
                    </div>
                    <div className="post-cont">
                      <Link href="/blog">
                        <span className="tag">Portrait</span>
                      </Link>
                      <h5>
                        <Link href="/black-white-shots">The Art of Monochrome: Black & White Photography Tips</Link>
                      </h5>
                      <p>
                        Discover how contrast, shadow depth, and expression transform classic black and white portraiture into unforgettable emotional statements.
                      </p>
                      <div className="info">24 December 2026</div>
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="item">
                    <div className="post-img img-grayscale">
                      <Link href="/lovely-wedding">
                        <img src="/img/blog/2.jpg" alt="Lovely Wedding" />
                      </Link>
                    </div>
                    <div className="post-cont">
                      <Link href="/blog">
                        <span className="tag">Wedding</span>
                      </Link>
                      <h5>
                        <Link href="/lovely-wedding">Capturing Candid Wedding Memories That Last a Lifetime</Link>
                      </h5>
                      <p>
                        Behind-the-scenes techniques for documenting unscripted wedding joy, emotional family highlights, and timeless couple portraits.
                      </p>
                      <div className="info">21 December 2026</div>
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="item">
                    <div className="post-img img-grayscale">
                      <Link href="/product-shots">
                        <img src="/img/blog/3.jpg" alt="Product Shots" />
                      </Link>
                    </div>
                    <div className="post-cont">
                      <Link href="/blog">
                        <span className="tag">Still Life</span>
                      </Link>
                      <h5>
                        <Link href="/product-shots">Mastering Studio Lighting for High-End Product Photography</Link>
                      </h5>
                      <p>
                        An insider guide on controlling reflections, diffusion, and highlights to showcase commercial products with maximum brand impact.
                      </p>
                      <div className="info">27 December 2026</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pagination */}
              <div className="row">
                <div className="col-md-12 text-center">
                  <ul className="blog-pagination-wrap align-center">
                    <li>
                      <a href="#">
                        <i className="ti-arrow-left"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#" className="active">
                        2
                      </a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-arrow-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-md-4">
              <div className="blog-sidebar row">
                {/* Search */}
                <div className="col-md-12">
                  <div className="widget search">
                    <form onSubmit={(e) => e.preventDefault()}>
                      <input type="text" name="search" placeholder="Search articles ..." />
                      <button type="submit">
                        <i className="ti-search" aria-hidden="true"></i>
                      </button>
                    </form>
                  </div>
                </div>

                {/* Recent Posts */}
                <div className="col-md-12">
                  <div className="widget">
                    <div className="widget-title">
                      <h6>Recent Posts</h6>
                    </div>
                    <ul className="recent">
                      <li>
                        <div className="thum">
                          <img src="/img/blog/1.jpg" alt="" />
                        </div>
                        <Link href="/black-white-shots">Black and White Shots</Link>
                      </li>
                      <li>
                        <div className="thum">
                          <img src="/img/blog/3.jpg" alt="" />
                        </div>
                        <Link href="/lovely-wedding">Lovely Wedding Stories</Link>
                      </li>
                      <li>
                        <div className="thum">
                          <img src="/img/blog/2.jpg" alt="" />
                        </div>
                        <Link href="/product-shots">Product Photography Studio</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Archives */}
                <div className="col-md-12">
                  <div className="widget">
                    <div className="widget-title">
                      <h6>Archives</h6>
                    </div>
                    <ul>
                      <li>
                        <a href="#">October 2026</a>
                      </li>
                      <li>
                        <a href="#">November 2026</a>
                      </li>
                      <li>
                        <a href="#">December 2026</a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Categories */}
                <div className="col-md-12">
                  <div className="widget">
                    <div className="widget-title">
                      <h6>Categories</h6>
                    </div>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="ti-angle-right"></i>Portrait
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-angle-right"></i>Wedding
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-angle-right"></i>Still Life
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Tags */}
                <div className="col-md-12">
                  <div className="widget">
                    <div className="widget-title">
                      <h6>Tags</h6>
                    </div>
                    <ul className="tags">
                      <li>
                        <a href="#">Still Life</a>
                      </li>
                      <li>
                        <a href="#">Fashion</a>
                      </li>
                      <li>
                        <a href="#">Wedding</a>
                      </li>
                      <li>
                        <a href="#">Sport</a>
                      </li>
                      <li>
                        <a href="#">Portrait</a>
                      </li>
                      <li>
                        <a href="#">Black & White</a>
                      </li>
                      <li>
                        <a href="#">Family</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="line-vr-section"></div>

      <Footer />
    </>
  );
}
