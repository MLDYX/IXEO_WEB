import { NavigationItem } from '@/data/header';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export type NavItemVariant = 'default' | 'border' | 'white' | 'light';

interface NavItemLinkProps {
  item: NavigationItem;
  variant?: NavItemVariant;
}

const getVariantClasses = (variant: NavItemVariant = 'default', isActive: boolean = false): string => {
  const baseGlow =
    'text-accent/70 hover:text-accent hover:drop-shadow-[0_0_10px_rgba(125,205,255,0.7)] transition-all duration-200';

  const variants = {
    default: cn(
      'flex items-center gap-1 px-3 py-2 rounded-full text-tagline-1 font-normal',
      baseGlow,
      isActive && 'text-accent drop-shadow-[0_0_12px_rgba(125,205,255,0.8)]',
    ),
    border:
      "flex items-center gap-1 h-full relative text-tagline-1 font-normal text-accent transition-all duration-200 overflow-hidden before:absolute before:bottom-0 before:left-0 before:h-px before:w-full before:origin-right before:scale-x-0 before:transition-transform before:duration-500 before:content-[''] hover:before:origin-left hover:before:scale-x-100 before:bg-accent",
    white:
      "flex items-center gap-1 h-full relative text-tagline-1 font-normal text-accent transition-all duration-200 before:absolute before:content-[''] before:bottom-0 before:left-0 before:h-px before:w-0 before:bg-accent before:transition-all before:duration-300 group-hover/nav:before:w-full ",
    light:
      'flex items-center gap-1 px-4 py-2 border border-transparent rounded-full text-tagline-1 font-normal text-accent transition-all duration-200 hover:bg-accent/15 hover:border-accent/40',
  };

  return variants[variant];
};

const NavItemLink = ({ item, variant = 'default' }: NavItemLinkProps) => {
  const pathname = usePathname();
  const isActive = item.href ? pathname === item.href : false;

  return (
    <Link href={item.href ?? '#'} className={cn(getVariantClasses(variant, isActive))}>
      <span>{item?.label}</span>
      {item?.hasDropdown && (
        <span
          className={cn(
            'block translate-y-px transition-transform duration-300 group-hover/nav:-rotate-180',
            isActive && '-rotate-180',
          )}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4 transition-colors duration-200 group-hover/nav:text-accent">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      )}
    </Link>
  );
};

export default NavItemLink;
