import logo from '@public/images/shared/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <div className="ml-2 lg:ml-4">
      <Link href="/">
        <span className="sr-only">Home</span>
        <figure className="hidden lg:block lg:max-w-[128px]">
          <Image src={logo} alt="Logo" className="w-full" />
        </figure>

        {/* mobile logo */}
        <figure className="block max-w-[32px] lg:hidden">
          <Image src={logo} alt="Logo" className="block w-full" />
        </figure>
      </Link>
    </div>
  );
};

export default Logo;
