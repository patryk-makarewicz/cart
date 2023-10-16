import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import FlagEn from '../../assets/lang_en.png';
import FlagPl from '../../assets/lang_pl.png';
import Logo from '../../assets/logo_black.svg';
import CartIcon from '../../assets/shopping_cart.svg';
import { useTranslation } from '../../i18n/client';
import { useAppSelector } from '../../redux/hooks';
import { Navigation } from '../navigation';

export const Header = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng);
  const pathname = usePathname();
  const cart = useAppSelector((state) => state.cartReducer.cart);

  const pages = [
    {
      href: `/${lng}`,
      label: `${t('components.navigation.home')}`
    },
    {
      href: `/${lng}/products`,
      label: `${t('components.navigation.products')}`
    }
  ];

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between p-2.5">
        <div className="flex items-center">
          <Link href={`/${lng}`}>
            <Image priority src={Logo} width={30} height={36} alt="Logo makaDev" className="mr-5" />
          </Link>
          <Navigation pages={pages} pathname={pathname} />
        </div>
        <div className="flex items-center">
          <Link href={`/${lng}/cart`} className=" relative mr-5">
            <Image priority src={CartIcon} alt="Cart icon" className="mt-1" />
            {cart.length > 0 && (
              <div className="absolute -right-3 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-sky-700 text-xs font-semibold text-white">
                {cart.reduce((acc, current) => acc + current.quantity, 0)}
              </div>
            )}
          </Link>
          <div className="h-8 w-8 rounded-full border-2 border-white drop-shadow-lg">
            {lng === 'pl' ? (
              <Link href={pathname.replace('/pl', '/en')}>
                <Image priority src={FlagPl} width={30} height={30} alt="Poland flag" />
              </Link>
            ) : (
              <Link href={pathname.replace('/en', '/pl')}>
                <Image priority src={FlagEn} width={30} height={30} alt="English flag" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};