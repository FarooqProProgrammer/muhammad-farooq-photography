import ServiceDetailContent from '@/components/ServiceDetailContent';

export default function StillLifePhotographyPage() {
  return (
    <ServiceDetailContent
      title="Still Life Photography"
      bannerImg="/img/slider/4.jpg"
      galleryImages={['/img/services/4.jpg', '/img/services/5.jpg', '/img/services/6.jpg']}
      activeSlug="still-life-photography"
    />
  );
}

