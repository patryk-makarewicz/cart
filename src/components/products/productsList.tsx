'use client';

import { ArtworksListDTO, CartModel } from '@/api/artworks/artworks.model';
import { useAppDispatch } from '@/redux/hooks';
import { addToCart, removeFromCart, resetCart } from '@/redux/features/cartSlice';

export const ProductsList = ({ records }: ArtworksListDTO) => {
  const dispatch = useAppDispatch();

  if (!records) {
    return <p>No data</p>;
  }

  return (
    <div>
      <ul>
        {records.map((item) => (
          <li key={item.id}>
            {item.fields.name} <button onClick={() => dispatch(addToCart(item as CartModel))}>+</button>{' '}
            <button onClick={() => dispatch(removeFromCart(item as CartModel))}>-</button>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch(resetCart())}>reset cart</button>
    </div>
  );
};
