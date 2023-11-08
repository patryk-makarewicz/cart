import { CartModel } from '@/api/artworks/artworks.model';
import { Button } from '@/components/button';
import { useTranslation } from '@/i18n/client';

type SummaryProps = {
  cart: CartModel[];
  lng: string;
  resetCart: () => void;
  handleSendCart: (cart: CartModel[]) => void;
};

export const Summary = ({ cart, lng, resetCart, handleSendCart }: SummaryProps) => {
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
        <Button onClick={resetCart}>{t('page.cart.resetCart')}</Button>
        <Button onClick={() => handleSendCart(cart)} kind="secondary">
          {t('page.cart.sendCart')}
        </Button>
      </div>
    </div>
  );
};
