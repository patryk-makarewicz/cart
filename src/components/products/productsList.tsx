'use client';

import { ArtworksListDTO, CartModel } from '@/api/artworks/artworks.model';
import { useAppDispatch } from '@/redux/hooks';
import { addToCart, removeFromCart } from '@/redux/features/cartSlice';
import { ProductsItem } from './productsItem';

export const ProductsList = ({ records }: ArtworksListDTO) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = (item: CartModel) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (item: CartModel) => {
    dispatch(removeFromCart(item));
  };

  if (!records) {
    return <p>No data</p>;
  }

  return (
    <>
      <ul className="m-auto flex flex-wrap justify-center ">
        {records.map((item) => (
          <ProductsItem item={item} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} />
        ))}
      </ul>
    </>
  );
};
