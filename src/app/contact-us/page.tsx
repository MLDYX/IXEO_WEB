import ContactInfo from '@/components/contact-page/ContactInfo';
import ContactMap from '@/components/contact-page/ContactMap';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Contact Us - RZ Industries',
};

const ContactUs = () => {
  return (
    <>
      <NavbarOne
        className="border-stroke-2 dark:border-stroke-6 bg-accent dark:bg-background-9 border"
        btnClassName="btn-primary hover:btn-white-dark dark:hover:btn-white"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero
          title="Contact us"
          heading="Contact us"
          link="/contact-us"
          className="pt-24 md:pt-36 lg:pt-40 xl:pt-[200px]"
        />
        <ContactInfo />
        <ContactMap />
        <CTAV1
          className="dark:bg-background-5 bg-white"
          badgeClass="badge-yellow-v2"
          badgeText="Get started"
          ctaBtnText="Contact us"
          ctaHeading="Get in touch"
          description="We're here to help you with your inquiries and needs. Feel free to reach out to us using the contact form below, and we'll get back to you as soon as possible."
        />
      </main>
      <FooterOne />
    </>
  );
};
ContactUs.displayName = 'AboutPage03';
export default ContactUs;
