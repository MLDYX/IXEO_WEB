'use client';

import { MobileMenuProvider } from '@/context/MobileMenuContext';
import { navigationItems } from '@/data/header';
import { useNavbarScroll } from '@/hooks/useScrollHeader';
import { cn } from '@/utils/cn';
import logo from '@public/images/shared/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import MobileMenu from '../MobileMenu';
import MobileMenuButton from './MobileMenuButton';
import NavCTAButton from './NavCTAButton';
import NavItemLink from './NavItemLink';

interface NavbarFourProps {
  className?: string;
  megaMenuColor?: string;
  btnClassName?: string;
}

const NavbarFour = ({ className, megaMenuColor, btnClassName }: NavbarFourProps) => {
  const { isScrolled } = useNavbarScroll(100);
  return (
    <MobileMenuProvider>
      <header
        className={cn(
          'fixed top-3 left-0 z-50 flex w-full items-center px-12 transition-all duration-500 ease-in-out md:top-0 backdrop-blur-3xl',
          isScrolled && 'bg-black/40 px-5  dark:bg-transparent',
          className,
        )}>
        <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between">
          <div>
            <Link href="/">
              <span className="sr-only">Home</span>
              <Image src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="flex items-center gap-[76px]">
            <nav className="hidden items-center xl:flex">
              <ul className="flex items-center gap-6">
                {navigationItems.map((item) => {
                  return (
                    <li key={item?.id} className="py-6">
                      <NavItemLink variant="white" item={item} />
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="flex items-center gap-2">
              <NavCTAButton
                href="/signup-01"
                btnClassName={cn('btn-primary hover:btn-white-dark dark:hover:btn-white', btnClassName)}
                label="Get started"
              />
              {/* mobile menu btn */}
              <MobileMenuButton />
            </div>
          </div>
        </div>
        <MobileMenu />
      </header>
    </MobileMenuProvider>
  );
};

export default NavbarFour;
