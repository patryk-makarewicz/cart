'use client';

import { ArtworksListDTO, CartModel } from '@/api/artworks/artworks.model';
import { ProductsItem } from '@/components/products/productsItem';
import { useTranslation } from '@/i18n/client';

type ProductsListProps = {
  products: ArtworksListDTO;
  isLoadingProducts: boolean;
  handleAddToCart: (item: CartModel) => void;
  lng: string;
};

export const ProductsList = async ({ products, isLoadingProducts, handleAddToCart, lng }: ProductsListProps) => {
  const { t } = useTranslation(lng);

  if (!products.records || (!isLoadingProducts && products.records.length === 0)) {
    return (
      <div className="animate-fadeIn mx-auto my-3 flex h-48 w-72 flex-col items-center justify-center rounded-md border border-gray-200 bg-white px-3 pt-3 md:w-96">
        <p className="text-sm font-medium">{t('components.products.noData')}</p>
      </div>
    );
  }

  return (
    <>
      <ul className="flex flex-wrap justify-center animate-fadeIn">
        {products.records.map((product) => (
          <ProductsItem key={product.id} product={product} handleAddToCart={handleAddToCart} lng={lng} />
        ))}
      </ul>
    </>
  );
};
