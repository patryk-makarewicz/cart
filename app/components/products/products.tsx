'use client';

import Image from 'next/image';

import { ChangeEvent, useState } from 'react';

import { ArtworksListSortMethod, CartModel } from '@/api/artworks/artworks.model';
import ErrorIcon from '@/assets/error.svg';
import { Chatbot } from '@/components/chatbot';
import { ProductsList } from '@/components/products/productsList';
import { useFetchProducts } from '@/hooks/useFetchProducts';
import { useTranslation } from '@/i18n/client';
import { addToCart } from '@/redux/features/cartSlice';
import { useAppDispatch } from '@/redux/hooks';

import { FilterProducts } from './filtersProducts';
import { SortProducts } from './sortProducts';

export const Products = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng);
  const [params, setParams] = useState({
    sort: 'default' as ArtworksListSortMethod,
    filters: [] as string[]
  });

  const dispatch = useAppDispatch();
  const { products, loading, error } = useFetchProducts(params);

  const handleAddToCart = (item: CartModel) => {
    dispatch(addToCart(item));
  };

  const handleSelectSortMethod = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedSortMethod = event.target.value as ArtworksListSortMethod;
    setParams({ ...params, sort: selectedSortMethod });
  };

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    let updatedFilters = [...params.filters];

    if (event.target.checked) {
      updatedFilters.push(value);
    } else {
      updatedFilters = updatedFilters.filter((filter) => filter !== value);
    }

    setParams({ ...params, filters: updatedFilters });
  };

  if (error) {
    return (
      <div className="mx-auto flex w-72 flex-col rounded-md border border-gray-200 bg-white px-3 pt-3 md:w-96">
        <div className="flex h-48 flex-col items-center justify-evenly">
          <Image priority src={ErrorIcon} alt="Error icon" />
          <p className="text-sm font-medium">{t('page.products.error')}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SortProducts handleSelectSortMethod={handleSelectSortMethod} lng={lng} />
      <FilterProducts params={params} handleCheckboxChange={handleCheckboxChange} lng={lng} />
      <ProductsList products={products} isLoadingProducts={loading} handleAddToCart={handleAddToCart} lng={lng} />
      <Chatbot lng={lng} />
    </>
  );
};
