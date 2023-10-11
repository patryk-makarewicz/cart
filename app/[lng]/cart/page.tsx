'use client';

import Link from 'next/link';

import { Button } from '../../components/button';
import { CartList } from '../../components/cart/cartList';
import { Summary } from '../../components/cart/summary';
import { useTranslation } from '../../i18n/client';
import { fallbackLng, languages } from '../../i18n/settings';
import { resetCart } from '../../redux/features/cartSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import { lngProps } from '../page';
import { PageWrapper } from '../pageWrapper';

const CartPage = ({ params: { lng } }: lngProps) => {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t } = useTranslation(lng);

  const dispatch = useAppDispatch();
  const cart = useAppSelector((state: RootState) => state.cartReducer.cart);

  const handleResetCart = () => {
    dispatch(resetCart());
  };

  return (
    <PageWrapper>
      <div className="flex w-full flex-col items-center">
        <h2 className="mb-3 text-xl font-semibold leading-7 text-gray-900">{t('page.cart.title')}</h2>
        <CartList cart={cart} lng={lng} />
        <Summary cart={cart} lng={lng} resetCart={handleResetCart} />
        <Link href={`/${lng}/products`} className="pb-6">
          <Button>{t('page.cart.back')}</Button>
        </Link>
      </div>
    </PageWrapper>
  );
};

export default CartPage;
