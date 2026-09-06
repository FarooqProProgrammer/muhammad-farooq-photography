import ServiceDetailContent from '@/components/ServiceDetailContent';

export default function TravelPhotographyPage() {
  return (
    <ServiceDetailContent
      title="Travel Photography"
      bannerImg="/img/slider/3.jpg"
      galleryImages={['/img/services/3.jpg', '/img/services/4.jpg', '/img/services/5.jpg']}
      activeSlug="travel-photography"
    />
  );
}

