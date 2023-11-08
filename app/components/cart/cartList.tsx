'use client';

import Image from 'next/image';

import { CartModel } from '@/api/artworks/artworks.model';
import CartIcon from '@/assets/shopping_cart.svg';
import { CartItem } from '@/components/cart/cartItem';
import { useTranslation } from '@/i18n/client';

type CartListProps = {
  cart: CartModel[];
  handleAddToCart: (item: CartModel) => void;
  handleRemoveFromCart: (item: CartModel) => void;
  lng: string;
  isSending: boolean;
};

export const CartList = ({ cart, handleAddToCart, handleRemoveFromCart, lng, isSending }: CartListProps) => {
  const { t } = useTranslation(lng);

  return (
    <div className="mb-3 flex w-72 flex-col rounded-md border border-appGrayLight bg-white px-3 pt-3 md:w-96">
      {cart.length === 0 ? (
        <div className="flex h-48 flex-col items-center justify-evenly">
          <Image priority src={CartIcon} alt="Cart icon" />
          <p className="text-sm font-medium">{t('page.cart.empty')}</p>
        </div>
      ) : (
        <ul>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              lng={lng}
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart}
              isSending={isSending}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
