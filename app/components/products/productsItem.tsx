import { ArtworkModel, CartModel } from '@/api/artworks/artworks.model';
import { Button } from '@/components/button';
import { usePhotoLoading } from '@/hooks/usePhotoLoading';
import { useTranslation } from '@/i18n/client';

import { Placeholder } from '../placeholder';

type ProductsItemProps = {
  product: ArtworkModel;
  handleAddToCart: (item: CartModel) => void;
  lng: string;
};

export const ProductsItem = ({ product, handleAddToCart, lng }: ProductsItemProps) => {
  const { t } = useTranslation(lng);

  const { onLoad, loaded, refPhoto } = usePhotoLoading();

  return (
    <li className="m-3 w-72 overflow-hidden rounded-md border border-appGrayLight bg-white animate-fadeIn">
      <div className="h-96 w-full relative">
        <Placeholder hide={loaded} />
        <img
          src={product.fields.imageSrc}
          alt={product.fields.imageAlt}
          ref={refPhoto}
          onLoad={onLoad}
          className={`${!loaded ? 'opacity-0' : 'opacity-100 animate-fadeIn'}  h-full w-full object-cover `}
        />
        {loaded && product.fields.bestseller === 'true' && (
          <div className="absolute top-0 left-0 bg-white px-2 py-1 text-xs text-appGray rounded-ee border-solid border-b border-r border-appGrayLight ">
            {t('components.products.bestseller')}
          </div>
        )}
      </div>

      <div className="p-3">
        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-appBlueDark ring-1 ring-inset ring-blue-700/10">
          {t(`components.filters.${product.fields.category}`)}
        </span>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-appGray">{product.fields.name}</p>
        <p className="mb-2 text-base font-semibold leading-">
          {product.fields.price.toFixed(2)} {product.fields.currency}
        </p>
        <div className="mb-2 flex justify-evenly">
          <Button kind="default" onClick={() => handleAddToCart(product as CartModel)}>
            <span className="uppercase">{t('components.products.add')}</span>
          </Button>
        </div>
      </div>
    </li>
  );
};
