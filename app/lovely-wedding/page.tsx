import ServiceDetailContent from '@/components/ServiceDetailContent';

export default function LovelyWeddingPage() {
  return (
    <ServiceDetailContent
      title="Lovely Wedding"
      bannerImg="/img/slider/2.jpg"
      galleryImages={['/img/blog/2.jpg', '/img/gallery/03.jpg', '/img/gallery/04.jpg']}
      activeSlug="wedding-photography"
    />
  );
}

