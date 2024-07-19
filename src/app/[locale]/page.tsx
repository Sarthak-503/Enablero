import ClientLogo from '@/components/common/client-logo';
import HeroSection from '@/components/header/hero-section';
import AboutUs from '@/components/home/about-us';
import OurServices from '@/components/home/our-services';
import Testimonials from '@/components/home/testimonials';
import { homeContent } from '@/services';
import { useTranslations } from 'next-intl';

const Home = () => {
  const t = useTranslations('HOME_PAGE');
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        sectionTitle={t(`HERO_SECTION.${homeContent.heroSection.sectionTitle}`)}
        sectionSubtitle={t(
          `HERO_SECTION.${homeContent.heroSection.sectionSubtitle}`
        )}
      />

      {/* Service Section */}
      <OurServices />

      {/*About us  */}
      <AboutUs />
      {/* Testimonials */}
      <Testimonials />

      {/* Clients-Logo */}
      <ClientLogo />
    </>
  );
};

export default Home;
