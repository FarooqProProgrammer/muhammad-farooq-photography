import ServiceDetailContent from '@/components/ServiceDetailContent';

export default function FashionPhotographyPage() {
  return (
    <ServiceDetailContent
      title="Fashion Photography"
      bannerImg="/img/slider/5.jpg"
      galleryImages={['/img/services/5.jpg', '/img/services/6.jpg', '/img/services/1.jpg']}
      activeSlug="fashion-photography"
    />
  );
}

