'use client';

import Masonry from 'react-masonry-css';
import Link from 'next/link';

export default function PortfolioSection() {
  const galleryItems = [
    { src: '/img/gallery/01.jpg', title: 'Model Photography', href: '/fashion-photography' },
    { src: '/img/gallery/02.jpg', title: 'Wedding Photography', href: '/wedding-photography' },
    { src: '/img/gallery/03.jpg', title: 'Portrait Photography', href: '/potrait-photography' },
    { src: '/img/gallery/04.jpg', title: 'Travel Photography', href: '/travel-photography' },
    { src: '/img/gallery/05.jpg', title: 'Family Photography', href: '/team-details' },
    { src: '/img/gallery/06.jpg', title: 'Sport Photography', href: '/sporty-photography' },
    { src: '/img/gallery/07.jpg', title: 'Black & White Shots', href: '/black-white-shots' },
    { src: '/img/gallery/08.jpg', title: 'Product Photography', href: '/product-shots' },
    { src: '/img/gallery/09.jpg', title: 'Still Life Photography', href: '/still-life-photography' },
  ];

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    768: 2,
    500: 1
  };

  return (
    <section id="portfolio" className="section-padding bg-darker" data-scroll-index="3">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title mb-30">
              <span>Gallery</span>
              <h2>Portfolio</h2>
            </div>
          </div>
        </div>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {galleryItems.map((item, idx) => (
            <div className="gallery-item" key={idx}>
              <div className="gallery-item-inner">
                <Link href={item.href} title={item.title} className="img-grayscale img-zoom">
                  <div className="gallery-box">
                    <div className="gallery-img">
                      <img src={item.src} className="img-fluid mx-auto d-block" alt={item.title} />
                    </div>
                    <div className="gallery-detail">
                      <h4>{item.title}</h4>
                      <p>View Category</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </Masonry>
      </div>
    </section>
  );
}


