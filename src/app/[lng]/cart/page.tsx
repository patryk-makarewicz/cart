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
        <h1>{t('greetings')} - cart page!</h1>
        <h2>
          <div>Item in cart: {cart.reduce((acc, current) => acc + current.quantity, 0)}</div>
        </h2>
        <h2>
          <div>Total price: {cart.reduce((acc, current) => acc + current.fields.price * current.quantity, 0)}$</div>
        </h2>

        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.fields.name} - {item.fields.price.toFixed(2)}$ - {item.quantity}
            </li>
          ))}
        </ul>

        <button onClick={() => dispatch(resetCart())}>reset cart</button>

        <Link href={`/${lng}/products`}>
          <Button>Back</Button>
        </Link>
      </div>
    </>
  );
};

export default CartPage;
