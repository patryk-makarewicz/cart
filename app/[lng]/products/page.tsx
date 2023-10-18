'use client';

import { ChangeEvent, Suspense, useEffect, useState } from 'react';

import { getArtworks } from '../../api/artworks/artworks.api';
import { ArtworksListDTO, ArtworksListSortMethod, CartModel } from '../../api/artworks/artworks.model';
import { Chatbot } from '../../components/chatbot';
import { ProductsList } from '../../components/products';
import { Category } from '../../components/typography/category';
import { useTranslation } from '../../i18n/client';
import { addToCart } from '../../redux/features/cartSlice';
import { useAppDispatch } from '../../redux/hooks';
import Loading from '../loading';
import { lngProps } from '../page';
import { PageWrapper } from '../pageWrapper';

const ProductsPage = ({ params: { lng } }: lngProps) => {
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
      <PageWrapper>
        <div className="mx-auto flex w-full flex-col">
          <Category category={t('components.products.category')} subcategory={t('components.products.subcategory')} />
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
        </div>
      </PageWrapper>
      <Chatbot lng={lng} />
    </>
  );
};

export default ProductsPage;
