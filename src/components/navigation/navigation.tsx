import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavigationProps = {
  pages: {
    href: string;
    label: string;
  }[];
};

export const Navigation = ({ pages }: NavigationProps) => {
  const pathname = usePathname();

  return (
    <nav>
      {pages.map((page) => (
        <Link
          key={page.href}
          href={page.href}
          className={`${
            page.href === pathname ? 'font-semibold text-sky-700' : 'font-medium'
          } mr-5 transition duration-300 ease-in-out hover:text-sky-700`}>
          {page.label}
        </Link>
      ))}
    </nav>
  );
};
