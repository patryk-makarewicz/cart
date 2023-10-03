import Image from 'next/image';
import Link from 'next/link';
import { useAppSelector } from '@/redux/hooks';

import Logo from '../../assets/logo_black.svg';
import CartIcon from '../../assets/shopping_cart.svg';
import FlagPl from '../../assets/lang_pl.png';
import FlagEn from '../../assets/lang_en.png';
import { Navigation } from '../navigation/navigation';
import { useTranslation } from '@/app/i18n/client';

export const Header = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng);
  const cart = useAppSelector((state) => state.cartReducer.cart);

  const pages = [
    {
      href: `/${lng}`,
      label: `${t('components.navigation.home')}`
    },
    {
      href: `/${lng}/products`,
      label: `${t('components.navigation.products')}`
    },
    {
      href: `/${lng}/second-page`,
      label: `Second Test`
    },
    {
      href: `/${lng}/client-page`,
      label: `Client Test`
    }
  ];

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between p-2.5">
        <div className="flex items-center">
          <Link href={`/${lng}`}>
            <Image priority src={Logo} width={30} height={36} alt="Logo makaDev" className="mr-5" />
          </Link>
          <Navigation pages={pages} />
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
              <Link href={'/en'}>
                <Image priority src={FlagPl} width={30} height={30} alt="Poland flag" />
              </Link>
            ) : (
              <Link href={'/pl'}>
                <Image priority src={FlagEn} width={30} height={30} alt="English flag" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
