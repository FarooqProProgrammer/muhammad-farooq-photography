import ServiceDetailContent from '@/components/ServiceDetailContent';

export default function BlackWhiteShotsPage() {
  return (
    <ServiceDetailContent
      title="Black & White Shots"
      bannerImg="/img/slider/1.jpg"
      galleryImages={['/img/blog/1.jpg', '/img/gallery/01.jpg', '/img/gallery/02.jpg']}
      activeSlug="potrait-photography"
    />
  );
}

