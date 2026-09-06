import ServiceDetailContent from '@/components/ServiceDetailContent';

export default function PortraitPhotographyPage() {
  return (
    <ServiceDetailContent
      title="Portrait Photography"
      bannerImg="/img/slider/2.jpg"
      galleryImages={['/img/services/10.jpg', '/img/services/11.jpg', '/img/services/12.jpg']}
      activeSlug="potrait-photography"
    />
  );
}

