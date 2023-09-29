import Image from 'next/image';
import Logo from '../../assets/logo_black.svg';
import FlagPl from '../../assets/lang_pl.png';
import FlagEn from '../../assets/lang_en.png';

import Link from 'next/link';
import { useAppSelector } from '@/redux/hooks';

export const Header = ({ lng }: { lng: string }) => {
  const cart = useAppSelector((state) => state.cartReducer.cart);

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between p-2.5">
        <Image priority src={Logo} width={30} height={36} alt="Logo makaDev" />
        <div>
          <Link href={`/${lng}`}>Home Page </Link>
          <Link href={`/${lng}/products`}>Products Page </Link>
          <Link href={`/${lng}/second-page`}>Second Page </Link>
          <Link href={`/${lng}/client-page`}>Client Page</Link>
        </div>
        <div>
          <Link href={`/${lng}/cart`}>Item in cart: {cart.reduce((acc, current) => acc + current.quantity, 0)}</Link>
        </div>
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
    </header>
  );
};
