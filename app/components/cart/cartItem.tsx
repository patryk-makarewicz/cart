'use client';

import { CartModel } from '@/api/artworks/artworks.model';
import { Button } from '@/components/button';
import { useTranslation } from '@/i18n/client';

type CartItemProps = {
  item: CartModel;
  lng: string;
  handleAddToCart: (item: CartModel) => void;
  handleRemoveFromCart: (item: CartModel) => void;
  isSending: boolean;
};

export const CartItem = ({ item, lng, handleAddToCart, handleRemoveFromCart, isSending }: CartItemProps) => {
  const { t } = useTranslation(lng);

  return (
    <li className="mb-3 flex items-center">
      <img src={item.fields.imageSrc} alt={item.fields.imageAlt} className="mr-3 h-20 w-16 rounded-sm object-cover" />
      <div>
        <p className="mt max-w-2xl text-sm leading-6 text-appGray">{item.fields.name}</p>
        <p className="mb text-base font-semibold leading-6">
          {item.fields.price.toFixed(2)}$ {item.fields.currency}
        </p>
        <div className="flex items-center gap-2">
          <Button kind="addOrRemove" onClick={() => handleAddToCart(item)} disabled={isSending}>
            +
          </Button>
          <p className="text-base leading-6 ">
            {t('page.cart.items')}: {item.quantity}
          </p>
          <Button kind="addOrRemove" onClick={() => handleRemoveFromCart(item)} disabled={isSending}>
            -
          </Button>
        </div>
      </div>
    </li>
  );
};
