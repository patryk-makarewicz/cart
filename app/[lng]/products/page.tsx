import { Chatbot } from '../../components/chatbot';
import { ProductsList } from '../../components/products';
import { Category } from '../../components/typography/category';
import { useTranslation } from '../../i18n';
import { fallbackLng, languages } from '../../i18n/settings';
import { lngProps } from '../page';
import { PageWrapper } from '../pageWrapper';

const ProductsPage = async ({ params: { lng } }: lngProps) => {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t } = await useTranslation(lng);

  return (
    <>
      <PageWrapper>
        <div className="mx-auto flex w-full flex-col">
          <Category category={t('components.products.category')} subcategory={t('components.products.subcategory')} />
          <ProductsList lng={lng} />
        </div>
      </PageWrapper>
      <Chatbot lng={lng} />
    </>
  );
};

export default ProductsPage;
