import AboutMap from '@/components/aboutpage-03/AboutMap';
import Feature from '@/components/aboutpage-03/Feature';
import Innovation from '@/components/aboutpage-03/Innovation';
import OurMission from '@/components/aboutpage-03/OurMission';
import OurVision from '@/components/aboutpage-03/OurVision';
import Teams from '@/components/homepage-08/Teams';
import CTA from '@/components/homepage-10/CTA';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'About Us - RZ Industries',
};

const AboutPage03 = () => {
  return (
    <>
      <NavbarOne
        className="border-stroke-2 dark:border-stroke-6 bg-accent dark:bg-background-9 border"
        btnClassName="btn-primary hover:btn-white-dark dark:hover:btn-white"
      />
      <main className="bg-background-3 dark:bg-background-5">
        <PageHero title="About us 3" heading="About us" link="/about-03" />
        <Feature />
        <OurMission />
        <OurVision />
        <Innovation />
        <Teams />
        <AboutMap />
        <CTA />
      </main>
      <FooterOne />
    </>
  );
};
AboutPage03.displayName = 'AboutPage03';
export default AboutPage03;
