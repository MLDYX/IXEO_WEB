import Features from '@/components/our-services-01/Features';
import Pricing from '@/components/our-services-01/Pricing';
import Services from '@/components/our-services-01/Services';
import Solutions from '@/components/our-services-01/Solutions';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Our Services - RZ Industries',
};

const OurServices01 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="border-stroke-2 dark:border-stroke-6 bg-accent dark:bg-background-9 border"
        btnClassName="btn-primary hover:btn-white-dark dark:hover:btn-white"
      />
      <main className="bg-background-1 dark:bg-background-6">
        <PageHero title="Our Services" heading="Our Services" link="/our-services-01" />
        <Services />
        <Features />
        <Solutions />
        <Pricing />
        <CTAV1
          className="dark:bg-background-6 bg-white"
          badgeClass="hidden"
          ctaHeading="Build a complete website using the"
          spanText="assistance"
          description="Start your free trial today and see your ideas come to life easily and creatively."
          btnClass="hover:btn-secondary dark:hover:btn-accent"
          ctaBtnText="Get started"
        />
      </main>
      <FooterOne />
    </Fragment>
  );
};

export default OurServices01;
