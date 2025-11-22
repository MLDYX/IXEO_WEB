import googleLogo from '@public/images/icons/Google_2015_logo.svg.webp';
import microsoftLogo from '@public/images/icons/microsft.png';
import amazonLogo from '@public/images/icons/Amazon-Logo-White-Transparent.png';
import logo from '@public/images/shared/logo.svg';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';
import HeroDotBg from '../shared/HeroDotBg';
import LinkButton from '../ui/button/LinkButton';
import VerticalLine from './VerticalLine';

const Hero = () => {
  return (
    <RevealAnimation direction="up" offset={0}>
      <section className="bg-background-3 dark:bg-background-5 relative overflow-hidden pt-40 md:pt-52 lg:pt-64 2xl:pt-72 pb-24 lg:pb-[150px] min-h-[85vh]">
        {/* <!-- BG Dot --> */}
        <HeroDotBg />
        <VerticalLine />

        <div className="main-container relative z-20 flex flex-col items-center text-center">
          <RevealAnimation delay={0.05}>
            <span className="badge badge-green mb-5">Custom software</span>
          </RevealAnimation>

          <RevealAnimation delay={0.1}>
            <h1 className="mb-4 font-medium">
              Custom <span className="text-primary-500">software</span> that unlocks efficiency for your business.
            </h1>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <p className="mb-7 max-w-[700px] md:mb-10 lg:mb-14">
              Purpose-built solutions that streamline workflows, connect data, and remove manual overhead - so your teams
              move faster, save time, and deliver more for your organization with less friction.
            </p>
          </RevealAnimation>

          <ul className="mx-auto mb-9 flex flex-col gap-4 max-md:w-full md:mx-0 md:mb-11 md:w-auto md:flex-row lg:mb-14">
            <RevealAnimation delay={0.3} direction="left" offset={50}>
              <li>
                <LinkButton
                  href="/contact-us"
                  className="btn btn-primary hover:btn-white-dark dark:hover:btn-white btn-lg md:btn-xl mx-auto w-full md:mx-0 md:w-auto">
                  Contact Us
                </LinkButton>
              </li>
            </RevealAnimation>

            <RevealAnimation delay={0.5} direction="left" offset={50}>
              <li>
                <LinkButton
                  href="/services-01"
                  className="btn btn-white hover:btn-primary dark:btn-white-dark btn-lg md:btn-xl mx-auto w-full md:mx-0 md:w-auto">
                  Our Services
                </LinkButton>
              </li>
            </RevealAnimation>
          </ul>

          {/* <!-- Trust Indicator --> */}
          <div className="mt-14 mb-4 flex items-center justify-center gap-3 lg:mt-20 lg:mb-8">
            <RevealAnimation delay={0.5} direction="right" offset={50}>
              <div className="text-left">
                <p className="text-tagline-2 text-secondary dark:text-accent block font-medium">
                  USING TECHNOLOGY DEVELOPED BY:
                </p>
              </div>
            </RevealAnimation>
          </div>

          {/* <!-- Client Logos --> */}

          <RevealAnimation instant delay={0.6}>
            <div className="relative mx-auto w-[375px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1100px]">
              <div className="from-background-3 dark:from-background-5 absolute top-0 left-0 z-40 h-full w-[30%] bg-gradient-to-r to-transparent"></div>
              <div className="from-background-3 dark:from-background-5 absolute top-0 right-0 z-40 h-full w-[30%] bg-gradient-to-l to-transparent"></div>

              <Marquee autoFill speed={40}>
                <div className="flex items-center justify-center gap-8">
                  {[
                    { light: googleLogo, dark: googleLogo, alt: 'Google' },
                    { light: microsoftLogo, dark: microsoftLogo, alt: 'Microsoft' },
                    { light: amazonLogo, dark: amazonLogo, alt: 'Amazon' },
                    { light: logo, dark: logo, alt: 'IXEO' },
                  ].map((logoItem, index) => (
                    <figure key={index} className={`w-28 md:w-36 ${index === 0 ? 'ml-8' : ''}`}>
                      <Image
                        src={logoItem.light}
                        alt={`${logoItem.alt} logo`}
                        className="inline-block lg:w-auto"
                      />
                    </figure>
                  ))}
                </div>
              </Marquee>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </RevealAnimation>
  );
};
Hero.displayName = 'Hero';
export default Hero;
