import { CartModel } from '@/api/artworks/artworks.model';
import { useTranslation } from '@/app/i18n/client';
import { Button } from '../button';
import { useAppDispatch } from '@/redux/hooks';
import { resetCart } from '@/redux/features/cartSlice';

type SummaryProps = {
  cart: CartModel[];
  lng: string;
};

export const Summary = ({ cart, lng }: SummaryProps) => {
  const { t } = useTranslation(lng);
  const dispatch = useAppDispatch();

  if (cart.length === 0) {
    return null;
  }

  return (
    <div className="mb-5 mt-3 flex w-72 flex-col items-center rounded-md border border-gray-200 bg-white px-3 pb-5 pt-3 md:w-96">
      <p className="font-semibold leading-7 text-gray-500">
        {t('page.cart.itemsInCart')}: {cart.reduce((acc, current) => acc + current.quantity, 0)}
      </p>
      <p className="mb-3 font-semibold leading-7 text-gray-500">
        {t('page.cart.totalPrice')}:{' '}
        {cart.reduce((acc, current) => acc + current.fields.price * current.quantity, 0).toFixed(2)}$
      </p>
      <Button onClick={() => dispatch(resetCart())}>{t('page.cart.resetCart')}</Button>
    </div>
  );
};
