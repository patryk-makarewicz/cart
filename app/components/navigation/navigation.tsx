import Link from 'next/link';

type NavigationProps = {
  pages: {
    href: string;
    label: string;
  }[];
  pathname: string;
};

export const Navigation = ({ pages, pathname }: NavigationProps) => (
  <nav>
    {pages.map((page) => (
      <Link
        key={page.href}
        href={page.href}
        className={`${
          page.href === pathname ? 'font-medium text-appBlue' : 'font-normal'
        } mr-5 transition duration-300 ease-in-out hover:text-appBlue`}>
        {page.label}
      </Link>
    ))}
  </nav>
);
