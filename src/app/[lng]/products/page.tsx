import { ProductsList } from '@/components/products';
import { lngProps } from '../page';
import { useTranslation } from '@/app/i18n';
import { getArtworks } from '@/api/artworks/artworks.api';
import { Chatbot } from '@/components/chatbot';
import { Category } from '@/components/typography/category';

const ProductsPage = async ({ params: { lng } }: lngProps) => {
  const { t } = await useTranslation(lng);
  const artworks = await getArtworks();

  return (
    <div className="flex flex-col">
      <Category category={t('components.products.category')} subcategory={t('components.products.subcategory')} />
      <ProductsList products={artworks} />
      <Chatbot lng={lng} />
    </div>
  );
};

export default ProductsPage;
