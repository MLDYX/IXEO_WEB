import { servicesMenuItems } from '@/data/header';
import { cn } from '@/utils/cn';
import LinkButton from '@/components/ui/button/LinkButton';
import MegaMenuItem from './MegaMenuItem';

interface ServicesMenuProps {
  className?: string;
}

const ServicesMenu = ({ className }: ServicesMenuProps) => {
  const mid = Math.ceil(servicesMenuItems.length / 2);
  const padColumn = (column: typeof servicesMenuItems, prefix: string) => {
    const needed = Math.max(0, 3 - column.length);
    const placeholders = Array.from({ length: needed }).map((_, idx) => ({
      id: `${prefix}-placeholder-${idx}`,
      label: 'Coming soon',
      href: '#',
    }));
    return [...column, ...placeholders];
  };

  const columnA = padColumn(servicesMenuItems.slice(0, mid), 'col-a');
  const columnB = padColumn(servicesMenuItems.slice(mid), 'col-b');

  return (
    <div>
      <div className="fixed top-full left-1/2 z-50 hidden w-full max-w-[1290px] -translate-x-1/2 overflow-hidden rounded-[20px] bg-transparent py-6 transition-all duration-200 group-focus-within/nav:flex group-hover/nav:flex dark:bg-transparent"></div>
      <div
        className={cn(
          'bg-background-9 pointer-events-none absolute top-full left-1/2 z-50 mt-3 w-[92vw] min-w-[520px] max-w-[1100px] -translate-x-1/2 translate-y-4 overflow-hidden rounded-[24px] border border-stroke-7 px-10 py-4 opacity-0 shadow-[0_24px_70px_-32px_rgba(0,0,0,0.85)] transition-all duration-300 ease-out group-hover/nav:pointer-events-auto group-hover/nav:translate-y-0 group-hover/nav:opacity-100',
          className,
        )}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[1.05fr_1.05fr_0.9fr]">
          <div className="grid grid-cols-1 gap-[6px]">
            <p className="text-tagline-1 text-accent/85 uppercase tracking-[0.08em]">Services</p>
            <div className="grid grid-cols-1 gap-[6px]">
              {columnA.map((item) => (
                <MegaMenuItem key={item.id} item={item} />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-[6px]">
            <p className="text-tagline-1 text-accent/85 uppercase tracking-[0.08em]">More</p>
            <div className="grid grid-cols-1 gap-[6px]">
              {columnB.map((item) => (
                <MegaMenuItem key={item.id} item={item} />
              ))}
            </div>
          </div>

          <div className="relative flex flex-col gap-4 rounded-2xl border border-stroke-7 bg-background-8 p-6 text-left shadow-inner shadow-black/40 before:absolute before:left-[-28px] before:top-4 before:h-[calc(100%-32px)] before:w-px before:bg-stroke-7/70">
            <p className="text-tagline-1 text-accent/85 uppercase tracking-[0.08em]">Featured</p>
            <h4 className="text-heading-6 text-accent">Unified trading platform</h4>
            <LinkButton
              href="/signup-01"
              className="btn btn-primary btn-md w-fit hover:btn-white-dark dark:hover:btn-white">
              Get started
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
};
ServicesMenu.displayName = 'ServicesMenu';

export default ServicesMenu;
