import { CartModel } from '@/api/artworks/artworks.model';
import { Button } from '@/components/button';
import { useTranslation } from '@/i18n/client';
import { useState } from 'react';
import { Spinner } from '../spinner';

type SummaryProps = {
  cart: CartModel[];
  lng: string;
  resetCart: () => void;
  handleSendCart: (cart: CartModel[]) => void;
  isSending: boolean;
};

export const Summary = ({ cart, lng, resetCart, handleSendCart, isSending }: SummaryProps) => {
  const { t } = useTranslation(lng);

  if (cart.length === 0) {
    return null;
  }

  return (
    <div className="mb-5 mt-3 flex w-72 flex-col items-center rounded-md border border-appGrayLight bg-white px-3 pb-5 pt-3 md:w-96">
      <p className="font-semibold leading-7 text-appGray">
        {t('page.cart.itemsInCart')}: {cart.reduce((acc, current) => acc + current.quantity, 0)}
      </p>
      <p className="mb-3 font-semibold leading-7 text-appGray">
        {t('page.cart.totalPrice')}:{' '}
        {cart.reduce((acc, current) => acc + current.fields.price * current.quantity, 0).toFixed(2)}$
      </p>
      <div className="flex justify-center gap-4">
        <Button onClick={resetCart} kind="secondary" disabled={isSending}>
          {t('page.cart.resetCart')}
        </Button>
        <Button onClick={() => handleSendCart(cart)} disabled={isSending}>
          {!isSending ? t('page.cart.sendCart') : <Spinner width="20px" height="20px" />}
        </Button>
      </div>
    </div>
  );
};
