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
  const [params, setParams] = useState({
    sort: 'default' as ArtworksListSortMethod,
    filters: [] as string[]
  });

  const FilterOptions = [
    { value: 'pets', label: 'Pets' },
    { value: 'people', label: 'People' },
    { value: 'cities', label: 'Cities' },
    { value: 'food', label: 'Food' },
    { value: 'premium', label: 'Premium' },
    { value: 'landmarks', label: 'Landmarks' },
    { value: 'nature', label: 'Nature' }
  ];

  const SortOptions = [
    { value: ArtworksListSortMethod.DEFAULT, label: 'Default' },
    { value: ArtworksListSortMethod.PRICE, label: 'Price asc' },
    { value: ArtworksListSortMethod.PRICE_DESC, label: 'Price desc' },
    { value: ArtworksListSortMethod.NAME, label: 'Title asc' },
    { value: ArtworksListSortMethod.NAME_DESC, label: 'Title desc' }
  ];

  const fetchProducts = async () => {
    try {
      const productsData = await getArtworks(params.sort, params.filters);
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

  useEffect(() => {
    fetchProducts();
  }, [params.sort, params.filters]);

  return (
    <>
      <div>
        <select onChange={handleSelectSortMethod} className="w-32">
          {SortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        {FilterOptions.map((option) => (
          <label key={option.value}>
            <input
              type="checkbox"
              value={option.value}
              checked={params.filters.includes(option.value)}
              onChange={handleCheckboxChange}
            />
            {option.label}
          </label>
        ))}
      </div>

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
