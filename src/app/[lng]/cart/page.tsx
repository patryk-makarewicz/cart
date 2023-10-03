'use client';

import Link from 'next/link';

import { lngProps } from '../page';
import { RootState } from '@/redux/store';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useTranslation } from '@/app/i18n/client';
import { Button } from '@/components/button';
import { resetCart } from '@/redux/features/cartSlice';

const CartPage = ({ params: { lng } }: lngProps) => {
  const { t } = useTranslation(lng);
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state: RootState) => state.cartReducer.cart);

  return (
    <>
      <div className="flex flex-col items-center">
        <h2 className="mb-3 text-xl font-semibold leading-7 text-gray-900">{t('page.cart.title')}</h2>

        <ul className="mb-3 flex w-96 flex-col rounded-md border border-gray-200 bg-white px-3 pt-3">
          {cart.map((item) => (
            <li key={item.id} className="mb-3 flex items-center">
              <img
                src={item.fields.imageSrc}
                alt={item.fields.imageAlt}
                className="mr-3 h-20 w-16 rounded-sm object-cover"
              />
              <div>
                <p className="mt max-w-2xl text-sm leading-6 text-gray-500">{item.fields.name}</p>
                <p className="mb text-base font-semibold leading-6 text-gray-900">
                  {item.fields.price.toFixed(2)}$ {item.fields.currency}
                </p>
                <p className="text-base leading-6 text-gray-900">
                  {t('page.cart.items')}: {item.quantity}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mb-5 mt-3 flex w-96 flex-col items-center rounded-md border border-gray-200 bg-white px-3 pb-5 pt-3 ">
          <p className="font-semibold leading-7 text-gray-500">
            {t('page.cart.itemsInCart')}: {cart.reduce((acc, current) => acc + current.quantity, 0)}
          </p>
          <p className="mb-3 font-semibold leading-7 text-gray-500">
            {t('page.cart.totalPrice')}:{' '}
            {cart.reduce((acc, current) => acc + current.fields.price * current.quantity, 0).toFixed(2)}$
          </p>
          <Button onClick={() => dispatch(resetCart())}>{t('page.cart.resetCart')}</Button>
        </div>

        <Link href={`/${lng}/products`}>
          <Button>{t('page.cart.back')}</Button>
        </Link>
      </div>
    </>
  );
};

export default CartPage;
