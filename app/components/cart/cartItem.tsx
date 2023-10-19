'use client';

import { CartModel } from '../../api/artworks/artworks.model';
import { useTranslation } from '../../i18n/client';
import { Button } from '../button';

type CartItemProps = {
  item: CartModel;
  lng: string;
  handleAddToCart: (item: CartModel) => void;
  handleRemoveFromCart: (item: CartModel) => void;
};

export const CartItem = ({ item, lng, handleAddToCart, handleRemoveFromCart }: CartItemProps) => {
  const { t } = useTranslation(lng);

  return (
    <li className="mb-3 flex items-center">
      <img src={item.fields.imageSrc} alt={item.fields.imageAlt} className="mr-3 h-20 w-16 rounded-sm object-cover" />
      <div>
        <p className="mt max-w-2xl text-sm leading-6 text-gray-500">{item.fields.name}</p>
        <p className="mb text-base font-semibold leading-6 text-gray-900">
          {item.fields.price.toFixed(2)}$ {item.fields.currency}
        </p>
        <div className="flex items-center gap-2">
          <Button kind="addOrRemove" onClick={() => handleAddToCart(item)}>
            +
          </Button>
          <p className="text-base leading-6 text-gray-900">
            {t('page.cart.items')}: {item.quantity}
          </p>
          <Button kind="addOrRemove" onClick={() => handleRemoveFromCart(item)}>
            -
          </Button>
        </div>
      </div>
    </li>
  );
};
