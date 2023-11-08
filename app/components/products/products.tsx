'use client';

import Image from 'next/image';

import { ChangeEvent, ReactNode, useState } from 'react';

import { ArtworksListSortMethod, CartModel } from '@/api/artworks/artworks.model';
import ErrorIcon from '@/assets/error.svg';
import FiltersIcon from '@/assets/filters.svg';
import { Chatbot } from '@/components/chatbot';
import { ProductsList } from '@/components/products/productsList';
import { useFetchProducts } from '@/hooks/useFetchProducts';
import { useTranslation } from '@/i18n/client';
import { addToCart } from '@/redux/features/cartSlice';
import { setFilters, setSort } from '@/redux/features/productsSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

import { Button } from '../button';
import { FilterProducts } from './filtersProducts';
import { SortProducts } from './sortProducts';

export const Products = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng);

  const dispatch = useAppDispatch();
  const { params } = useAppSelector((state) => state.productsReducer);
  const { products, loading, error } = useFetchProducts(params);

  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const handleAddToCart = (item: CartModel) => {
    dispatch(addToCart(item));
  };

  const handleSelectSortMethod = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedSortMethod = event.target.value as ArtworksListSortMethod;
    dispatch(setSort(selectedSortMethod));
  };

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    dispatch(setFilters({ value, checked }));
  };

  const onHandleFilters = () => {
    setIsFiltersOpen((prev) => !prev);
  };

  const VisibleOnDesktop = ({ children }: { children: React.ReactNode }) => (
    <div className="hidden lg:block">{children}</div>
  );

  if (error) {
    return (
      <div className="mx-auto flex w-72 flex-col rounded-md border border-appGrayLight bg-white px-3 pt-3 md:w-96">
        <div className="flex h-48 flex-col items-center justify-evenly">
          <Image priority src={ErrorIcon} alt="Error icon" />
          <p className="text-sm font-medium">{t('page.products.error')}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {!isFiltersOpen && (
        <button
          onClick={onHandleFilters}
          className="fixed right-3 z-10 rounded-md border border-appGrayLight px-3 py-1 flex items-center w-fit bg-appPrimary text-white text-sm transition duration-300 ease-in-out hover:opacity-90 lg:hidden">
          <Image priority src={FiltersIcon} width={18} height={18} alt="Settings icon" className="mr-2" />
          {t('page.products.buttonFilters')}
        </button>
      )}
      {isFiltersOpen && (
        <div
          style={{ backdropFilter: 'blur(10px)' }}
          className="fixed top-3 -left-1 z-10 w-[101%] h-full animate-fadeIn">
          <div className="w-fit mx-auto mt-20 rounded-md border border-appGrayLight bg-white px-3 py-4 flex flex-col">
            <SortProducts params={params} handleSelectSortMethod={handleSelectSortMethod} lng={lng} />
            <FilterProducts params={params} handleCheckboxChange={handleCheckboxChange} lng={lng} />
            <Button onClick={onHandleFilters}>{t('page.products.buttonClose')}</Button>
          </div>
        </div>
      )}

      <VisibleOnDesktop>
        <SortProducts params={params} handleSelectSortMethod={handleSelectSortMethod} lng={lng} />
      </VisibleOnDesktop>
      <div className="flex h-full w-full">
        <VisibleOnDesktop>
          <FilterProducts params={params} handleCheckboxChange={handleCheckboxChange} lng={lng} />
        </VisibleOnDesktop>
        <ProductsList products={products} isLoadingProducts={loading} handleAddToCart={handleAddToCart} lng={lng} />
      </div>
      <Chatbot lng={lng} />
    </>
  );
};
