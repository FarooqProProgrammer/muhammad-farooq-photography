import ServiceDetailContent from '@/components/ServiceDetailContent';

export default function SportyPhotographyPage() {
  return (
    <ServiceDetailContent
      title="Sport Photography"
      bannerImg="/img/slider/6.jpg"
      galleryImages={['/img/services/6.jpg', '/img/services/2.jpg', '/img/services/3.jpg']}
      activeSlug="sporty-photography"
    />
  );
}

