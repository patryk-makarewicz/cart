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
    <li className="m-3 w-72 animate-fadeIn overflow-hidden rounded-md border border-appGrayLight bg-white">
      <div className="relative h-96 w-full">
        <Placeholder hide={loaded} />
        <img
          src={product.fields.imageSrc}
          alt={product.fields.imageAlt}
          ref={refPhoto}
          onLoad={onLoad}
          className={`${!loaded ? 'opacity-0' : 'animate-fadeIn opacity-100'}  h-full w-full object-cover `}
        />
        {loaded && product.fields.bestseller === 'true' && (
          <div className="absolute left-0 top-0 rounded-ee border-b border-r border-solid border-appGrayLight bg-white px-2 py-1 text-xs text-appGray ">
            {t('components.products.bestseller')}
          </div>
        )}
      </div>

      <div className="p-3">
        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-appBlueDark ring-1 ring-inset ring-blue-700/10">
          {t(`components.filters.${product.fields.category}`)}
        </span>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-appGray">{product.fields.name}</p>
        <p className="leading- mb-2 text-base font-semibold">
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
