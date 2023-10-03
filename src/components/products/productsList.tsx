'use client';

import { ArtworksListDTO, CartModel } from '@/api/artworks/artworks.model';
import { useAppDispatch } from '@/redux/hooks';
import { addToCart, removeFromCart } from '@/redux/features/cartSlice';
import { ProductsItem } from './productsItem';
import { useTranslation } from '@/app/i18n/client';

type ProductsListProps = {
  products: ArtworksListDTO;
};

export const ProductsList = ({ products }: ProductsListProps) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = (item: CartModel) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (item: CartModel) => {
    dispatch(removeFromCart(item));
  };

  if (!products.records) {
    return <p>No data</p>;
  }

  return (
    <ul className="flex flex-wrap justify-center">
      {products.records.map((product) => (
        <ProductsItem product={product} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} />
      ))}
    </ul>
  );
};
