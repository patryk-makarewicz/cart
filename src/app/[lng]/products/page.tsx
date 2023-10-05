import { ProductsList } from '@/components/products';
import { lngProps } from '../page';
import { useTranslation } from '@/app/i18n';
import { getArtworks } from '@/api/artworks/artworks.api';
import { Chatbot } from '@/components/chatbot';
import { Category } from '@/components/typography/category';
import { PageWrapper } from '../pageWrapper';

const ProductsPage = async ({ params: { lng } }: lngProps) => {
  const { t } = await useTranslation(lng);
  const artworks = await getArtworks();

  return (
    <>
      <PageWrapper>
        <div className="mx-auto flex w-full flex-col">
          <Category category={t('components.products.category')} subcategory={t('components.products.subcategory')} />
          <ProductsList products={artworks} lng={lng} />
        </div>
      </PageWrapper>
      <Chatbot lng={lng} />
    </>
  );
};

export default ProductsPage;
