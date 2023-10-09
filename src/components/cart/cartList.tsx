import { CartModel } from '@/api/artworks/artworks.model';
import { useTranslation } from '@/app/i18n/client';
import Image from 'next/image';
import CartIcon from '../../assets/shopping_cart.svg';
import { CartItem } from './cartItem';

type CartListProps = {
  cart: CartModel[];
  lng: string;
};

export const CartList = ({ cart, lng }: CartListProps) => {
  const { t } = useTranslation(lng);

  return (
    <div className="mb-3 flex w-72 flex-col rounded-md border border-gray-200 bg-white px-3 pt-3 md:w-96">
      {cart.length === 0 ? (
        <div className="flex h-48 flex-col items-center justify-evenly">
          <Image priority src={CartIcon} alt="Cart icon" />
          <p className="text-sm font-medium">{t('page.cart.empty')}</p>
        </div>
      ) : (
        <ul>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} lng={lng} />
          ))}
        </ul>
      )}
    </div>
  );
};
