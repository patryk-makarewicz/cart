import { ArtworkModel, CartModel } from '@/api/artworks/artworks.model';
import { ProductsItem } from '@/components/products/productsItem';
import { Spinner } from '@/components/spinner';
import { useTranslation } from '@/i18n/client';

type ProductsListProps = {
  products: ArtworkModel[];
  isLoadingProducts: boolean;
  handleAddToCart: (item: CartModel) => void;
  lng: string;
};

export const ProductsList = ({ products, isLoadingProducts, handleAddToCart, lng }: ProductsListProps) => {
  const { t } = useTranslation(lng);

  if (!products || (!isLoadingProducts && products.length === 0)) {
    return (
      <div className="mx-auto my-3 flex h-48 w-72 animate-fadeIn flex-col items-center justify-center rounded-md border border-appGrayLight bg-white px-3 pt-3 md:w-96">
        <p className="text-sm font-medium">{t('components.products.noData')}</p>
      </div>
    );
  }

  if (isLoadingProducts) {
    return <Spinner />;
  }

  return (
    <>
      <ul className="flex flex-wrap justify-center">
        {products.map((product) => (
          <ProductsItem key={product.id} product={product} handleAddToCart={handleAddToCart} lng={lng} />
        ))}
      </ul>
    </>
  );
};
