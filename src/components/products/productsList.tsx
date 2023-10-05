'use client';

import { ArtworksListDTO, CartModel } from '@/api/artworks/artworks.model';
import { useAppDispatch } from '@/redux/hooks';
import { addToCart, removeFromCart } from '@/redux/features/cartSlice';
import { ProductsItem } from './productsItem';
import { useTranslation } from '@/app/i18n/client';

type ProductsListProps = {
  products: ArtworksListDTO;
  lng: string;
};

export const ProductsList = ({ products, lng }: ProductsListProps) => {
  const { t } = useTranslation(lng);
  const dispatch = useAppDispatch();

  const handleAddToCart = (item: CartModel) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (item: CartModel) => {
    dispatch(removeFromCart(item));
  };

  if (!products.records || products.records.length === 0) {
    return (
      <div className=" mx-auto my-3 flex h-48 w-72 flex-col items-center justify-center rounded-md border border-gray-200 bg-white px-3 pt-3 md:w-96">
        <p className="text-sm font-medium">{t('components.products.noData')}</p>
      </div>
    );
  }

  return (
    <ul className="flex flex-wrap justify-center">
      {products.records.map((product) => (
        <ProductsItem product={product} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} />
      ))}
    </ul>
  );
};
