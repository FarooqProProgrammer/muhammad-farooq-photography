import ServiceDetailContent from '@/components/ServiceDetailContent';

export default function WeddingPhotographyPage() {
  return (
    <ServiceDetailContent
      title="Wedding Photography"
      bannerImg="/img/slider/1.jpg"
      galleryImages={['/img/services/1.jpg', '/img/services/2.jpg', '/img/services/3.jpg']}
      activeSlug="wedding-photography"
    />
  );
}

