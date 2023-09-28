'use client';

import { ArtworksListModel } from '@/api/artworks/artworks.model';
import { useAppDispatch } from '@/redux/hooks';
import { addToCart, resetCart } from '@/redux/features/cartSlice';

export const ProductsList = ({ records }: ArtworksListModel) => {
  const dispatch = useAppDispatch();

  if (!records) {
    return <p>No data</p>;
  }

  return (
    <div>
      <ul>
        {records.map((item) => (
          <li key={item.id}>
            {item.fields.name} <button onClick={() => dispatch(addToCart(item))}>+</button>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch(resetCart())}>reset cart</button>
    </div>
  );
};
