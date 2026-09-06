'use client';

import Link from 'next/link';

interface PageBannerProps {
  category: string;
  categoryLink?: string;
  title: string;
  bgImage: string;
}

export default function PageBanner({
  category,
  categoryLink = '#',
  title,
  bgImage,
}: PageBannerProps) {
  return (
    <>
      <section
        className="ready banner-padding bg-img"
        data-overlay-dark="7"
        data-background={bgImage}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 mt-30 text-center">
              <div className="title">
                <span>
                  <Link href={categoryLink}>{category}</Link>
                </span>
                <h2>{title}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="line-vr-section"></div>
    </>
  );
}

