'use client';

import Loading from '@/[lng]/loading';
import axios from 'axios';
import { ChangeEvent, Suspense, useEffect, useState } from 'react';

import { ArtworksListSortMethod, CartModel } from '@/api/artworks/artworks.model';
import { BASE_URL, headers } from '@/api/config';
import { Chatbot } from '@/components/chatbot';
import { ProductsList } from '@/components/products/productsList';
import { useTranslation } from '@/i18n/client';
import { addToCart } from '@/redux/features/cartSlice';
import { setProductsData, setLoading, setError, ProductsState } from '@/redux/features/productsSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

export const Products = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng);
  const [params, setParams] = useState({
    sort: 'default' as ArtworksListSortMethod,
    filters: [] as string[]
  });

  const dispatch = useAppDispatch();
  const {
    products: productsList,
    loading: isLoadingProducts,
    error: isErrorProducts
  } = useAppSelector((state) => state.productsReducer);

  const fetchProducts = async () => {
    try {
      const filterQuery =
        params.filters.length > 0
          ? `&filterByFormula=OR(${params.filters.map((filter) => `{category}="${filter}"`).join(', ')})`
          : '';
      dispatch(setLoading(true));
      const response = await axios.get(`${BASE_URL}/artworks?view=default&${params.sort}${filterQuery}`, { headers });
      dispatch(setProductsData(response.data));
      dispatch(setLoading(false));
    } catch (error) {
      console.error('An error occurred while fetching data:', error);
      dispatch(setError(true));
      dispatch(setLoading(false));
    }
  };

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
          products={productsList}
          isLoadingProducts={isLoadingProducts}
          handleAddToCart={handleAddToCart}
          lng={lng}
        />
      </Suspense>

      <Chatbot lng={lng} />
    </>
  );
};
