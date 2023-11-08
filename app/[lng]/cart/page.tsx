'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { lngProps } from '@/[lng]/page';
import { PageWrapper } from '@/[lng]/pageWrapper';

import { CartModel } from '@/api/artworks/artworks.model';
import { Button } from '@/components/button';
import { CartList } from '@/components/cart/cartList';
import { Summary } from '@/components/cart/summary';
import { useTranslation } from '@/i18n/client';
import { addToCart, removeFromCart, resetCart, sendCart } from '@/redux/features/cartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { useState } from 'react';

const CartPage = ({ params: { lng } }: lngProps) => {
  const { t } = useTranslation(lng);
  const { push } = useRouter();

  const dispatch = useAppDispatch();
  const cart = useAppSelector((state: RootState) => state.cartReducer.cart);
  const [isSending, setIsSending] = useState(false);

  const handleAddToCart = (item: CartModel) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (item: CartModel) => {
    dispatch(removeFromCart(item));
  };
  const handleResetCart = () => {
    dispatch(resetCart());
  };
  const handleSendCart = (cart: CartModel[]) => {
    setIsSending(true);
    setTimeout(() => {
      dispatch(sendCart(cart));
      setIsSending(false);
      push('/products');
    }, 4000);
  };

  return (
    <PageWrapper>
      <div className="flex w-full flex-col items-center">
        <h2 className="mb-3 text-xl font-semibold leading-7">{t('page.cart.title')}</h2>
        <CartList
          cart={cart}
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
          lng={lng}
          isSending={isSending}
        />
        <Summary
          cart={cart}
          lng={lng}
          resetCart={handleResetCart}
          handleSendCart={handleSendCart}
          isSending={isSending}
        />
        <Link href={`/${lng}/products`} className="pb-6">
          <Button>{t('page.cart.back')}</Button>
        </Link>
      </div>
    </PageWrapper>
  );
};

export default CartPage;
