'use client';

import Loading from '@/[lng]/loading';
import { ChangeEvent, Suspense, useEffect, useState } from 'react';

import { getArtworks } from '@/api/artworks';
import { ArtworksListDTO, ArtworksListSortMethod, CartModel } from '@/api/artworks/artworks.model';
import { Chatbot } from '@/components/chatbot';
import { ProductsList } from '@/components/products/productsList';
import { useTranslation } from '@/i18n/client';
import { addToCart } from '@/redux/features/cartSlice';
import { useAppDispatch } from '@/redux/hooks';

export const Products = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng);
  const dispatch = useAppDispatch();
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const [products, setProducts] = useState<ArtworksListDTO>({ records: [] });

  const fetchProducts = async (sortMethod: ArtworksListSortMethod) => {
    try {
      const productsData = await getArtworks(sortMethod);
      setProducts(productsData);
    } catch (error) {
      console.error('An error occurred while fetching data:', error);
    } finally {
      setIsLoadingProducts(false);
    }
  };

  const handleAddToCart = (item: CartModel) => {
    dispatch(addToCart(item));
  };

  const handleSelectSortMethod = (event: ChangeEvent<HTMLSelectElement>) => {
    fetchProducts(event.target.value as ArtworksListSortMethod);
  };

  useEffect(() => {
    fetchProducts(ArtworksListSortMethod.DEFAULT);
  }, []);
  return (
    <>
      <select onChange={handleSelectSortMethod} className="w-32">
        <option value={ArtworksListSortMethod.DEFAULT}>Default</option>
        <option value={ArtworksListSortMethod.PRICE}>Price asc</option>
        <option value={ArtworksListSortMethod.PRICE_DESC}>Price dsc</option>
        <option value={ArtworksListSortMethod.NAME}>Title asc</option>
        <option value={ArtworksListSortMethod.NAME_DESC}>Title dsc</option>
      </select>

      <Suspense fallback={<Loading />}>
        <ProductsList
          products={products}
          isLoadingProducts={isLoadingProducts}
          handleAddToCart={handleAddToCart}
          lng={lng}
        />
      </Suspense>

      <Chatbot lng={lng} />
    </>
  );
};
