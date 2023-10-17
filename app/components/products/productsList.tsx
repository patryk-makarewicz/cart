'use client';

import { ChangeEvent, useEffect, useState } from 'react';

import { getArtworks } from '../../api/artworks/artworks.api';
import { ArtworksListDTO, ArtworksListSortMethod, CartModel } from '../../api/artworks/artworks.model';
import { useTranslation } from '../../i18n/client';
import { addToCart } from '../../redux/features/cartSlice';
import { useAppDispatch } from '../../redux/hooks';
import { ProductsItem } from './productsItem';

export const ProductsList = async ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng);
  const dispatch = useAppDispatch();
  const [products, setProducts] = useState<ArtworksListDTO>({ records: [] });

  const fetchArtworks = async (sortMethod: ArtworksListSortMethod) => {
    const productsData = await getArtworks(sortMethod);

    setProducts(productsData);
  };

  useEffect(() => {
    fetchArtworks(ArtworksListSortMethod.DEFAULT);
  }, []);

  const handleAddToCart = (item: CartModel) => {
    dispatch(addToCart(item));
  };

  if (!products.records || products.records.length === 0) {
    return (
      <div className=" mx-auto my-3 flex h-48 w-72 flex-col items-center justify-center rounded-md border border-gray-200 bg-white px-3 pt-3 md:w-96">
        <p className="text-sm font-medium">{t('components.products.noData')}</p>
      </div>
    );
  }

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    fetchArtworks(event.target.value as ArtworksListSortMethod);
  };

  return (
    <>
      <select onChange={handleSelectChange}>
        <option value={ArtworksListSortMethod.DEFAULT}>Default</option>
        <option value={ArtworksListSortMethod.PRICE}>Price asc</option>
        <option value={ArtworksListSortMethod.PRICE_DESC}>Price dsc</option>
        <option value={ArtworksListSortMethod.NAME}>Title asc</option>
        <option value={ArtworksListSortMethod.NAME_DESC}>Title dsc</option>
      </select>
      <ul className="flex flex-wrap justify-center">
        {products.records.map((product) => (
          <ProductsItem key={product.id} product={product} handleAddToCart={handleAddToCart} lng={lng} />
        ))}
      </ul>
    </>
  );
};
