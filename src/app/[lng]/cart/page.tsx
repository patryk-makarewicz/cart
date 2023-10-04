'use client';

import Link from 'next/link';

import { lngProps } from '../page';
import { RootState } from '@/redux/store';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useTranslation } from '@/app/i18n/client';
import { Button } from '@/components/button';
import { CartList } from '@/components/cart/cartList';
import { Summary } from '@/components/cart/summary';

const CartPage = ({ params: { lng } }: lngProps) => {
  const { t } = useTranslation(lng);
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state: RootState) => state.cartReducer.cart);

  return (
    <>
      <div className="flex flex-col items-center">
        <h2 className="mb-3 text-xl font-semibold leading-7 text-gray-900">{t('page.cart.title')}</h2>
        <CartList cart={cart} lng={lng} />
        <Summary cart={cart} lng={lng} />
        <Link href={`/${lng}/products`} className="pb-6">
          <Button>{t('page.cart.back')}</Button>
        </Link>
      </div>
    </>
  );
};

export default CartPage;
