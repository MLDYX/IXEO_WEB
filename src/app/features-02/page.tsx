import Features from '@/components/features-02/Features';
import WhyChooseUs from '@/components/homepage-07/WhyChooseUs';
import Feature from '@/components/our-services-03/Feature';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import ReviewsV2 from '@/components/shared/reviews/ReviewsV2';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Features - RZ Industries',
};

const Features02 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="border-stroke-2 dark:border-stroke-6 bg-accent dark:bg-background-9 border"
        btnClassName="btn-primary hover:btn-white-dark dark:hover:btn-white"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero
          title="Features"
          className="pt-24 md:pt-36 lg:pt-40 xl:pt-[200px]"
          heading="Features - 02"
          link="/features-02"
        />
        <Features />
        <Feature btnClassName="btn-accent dark:btn-dark hover:btn-primary border-0 btn-md btn" />
        <WhyChooseUs className="dark:bg-background-7" />
        <ReviewsV2 badgeColor="!badge-cyan" sectionSpacingClass="pt-[100px] pb-[200px] space-y-[70px]" />

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

export default Features02;
