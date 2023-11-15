'use client';

import Image from 'next/image';

import { ChangeEvent, useState } from 'react';

import { ArtworksListSortMethod, CartModel } from '@/api/artworks/artworks.model';
import ErrorIcon from '@/assets/error.svg';
import FiltersIcon from '@/assets/filters.svg';
import { Chatbot } from '@/components/chatbot';
import { ProductsList } from '@/components/products/productsList';
import { useFetchProducts } from '@/hooks/useFetchProducts';
import { useTranslation } from '@/i18n/client';
import { addToCart } from '@/redux/features/cartSlice';
import { setFiltersCategory, setFiltersRange, setSort } from '@/redux/features/productsSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

import { Button } from '../button';
import { FilterProducts } from './filtersProducts';
import { SortProducts } from './sortProducts';

export const Products = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng);

  const dispatch = useAppDispatch();
  const { params } = useAppSelector((state) => state.productsReducer);
  const { products, isLoading, isError } = useFetchProducts(params);

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
    dispatch(setFiltersCategory({ value, checked }));
  };

  const handleCheckboxRangeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    dispatch(setFiltersRange({ value, checked }));
  };

  const onHandleFilters = () => {
    setIsFiltersOpen((prev) => !prev);
  };

  const VisibleOnDesktop = ({ children }: { children: React.ReactNode }) => (
    <div className="hidden lg:block">{children}</div>
  );

  if (isError) {
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
      {/* ----------  On mobile device ---------- */}
      {!isFiltersOpen && (
        <button
          onClick={onHandleFilters}
          className="fixed right-3 z-10 flex w-fit items-center rounded-md border border-appGrayLight bg-appPrimary px-3 py-1 text-sm text-white transition duration-300 ease-in-out hover:opacity-90 lg:hidden">
          <Image priority src={FiltersIcon} width={18} height={18} alt="Settings icon" className="mr-2" />
          {t('page.products.buttonFilters')}
        </button>
      )}
      {isFiltersOpen && (
        <div
          style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
          className="fixed -left-1 top-3 z-10 h-full w-[101%] animate-fadeIn">
          <div className="mx-auto mt-20 flex w-fit flex-col rounded-md border border-appGrayLight bg-white px-3 py-4">
            <SortProducts params={params} handleSelectSortMethod={handleSelectSortMethod} lng={lng} />
            <FilterProducts
              params={params}
              handleCheckboxChange={handleCheckboxChange}
              handleCheckboxRangeChange={handleCheckboxRangeChange}
              lng={lng}
            />
            <div className="mb-4 mt-4 border-b-2 border-s-appGray" />
            <Button onClick={onHandleFilters}>{t('page.products.buttonClose')}</Button>
          </div>
        </div>
      )}
      {/* ---------- On desktop device ---------- */}
      <VisibleOnDesktop>
        <div className="flex justify-end">
          <SortProducts params={params} handleSelectSortMethod={handleSelectSortMethod} lng={lng} />
        </div>
      </VisibleOnDesktop>
      <div className="flex h-full w-full">
        <VisibleOnDesktop>
          <FilterProducts
            params={params}
            handleCheckboxChange={handleCheckboxChange}
            handleCheckboxRangeChange={handleCheckboxRangeChange}
            lng={lng}
          />
        </VisibleOnDesktop>
        <ProductsList products={products} isLoadingProducts={isLoading} handleAddToCart={handleAddToCart} lng={lng} />
      </div>
      {/* ---------- On mobile and desktop device ---------- */}
      <Chatbot lng={lng} />
    </>
  );
};
