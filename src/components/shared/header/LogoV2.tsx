import logo from '@public/images/shared/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

const LogoV2 = () => {
  return (
    <div>
      <Link href="/">
        <span className="sr-only">Home</span>
        <figure className="hidden lg:block lg:max-w-[198px]">
          <Image src={logo} alt="Logo" className="w-full" />
        </figure>
        <figure className="block max-w-[44px] lg:hidden">
          <Image src={logo} alt="Logo" className="block w-full" />
        </figure>
      </Link>
    </div>
  );
};

export default LogoV2;
