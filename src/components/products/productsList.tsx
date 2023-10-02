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

  if (!products.records) {
    return <p>No data</p>;
  }

  return (
    <>
      <h2 className="mb text-xl font-semibold leading-7 text-gray-900">
        {t('components.products.category')} /{' '}
        <span className="font-normal text-gray-500">{t('components.products.subcategory')}</span>
      </h2>
      <ul className="m-auto flex flex-wrap justify-center ">
        {products.records.map((item) => (
          <ProductsItem item={item} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} />
        ))}
      </ul>
    </>
  );
};
