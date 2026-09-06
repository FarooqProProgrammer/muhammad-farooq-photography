import ServiceDetailContent from '@/components/ServiceDetailContent';

export default function ProductShotsPage() {
  return (
    <ServiceDetailContent
      title="Product Shots"
      bannerImg="/img/slider/3.jpg"
      galleryImages={['/img/blog/3.jpg', '/img/gallery/08.jpg', '/img/gallery/09.jpg']}
      activeSlug="still-life-photography"
    />
  );
}

