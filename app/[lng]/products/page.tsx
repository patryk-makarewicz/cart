import { lngProps } from '@/[lng]/page';
import { PageWrapper } from '@/[lng]/pageWrapper';

import { Products } from '@/components/products';
import { Category } from '@/components/typography/category';
import { useTranslation } from '@/i18n';

const ProductsPage = async ({ params: { lng } }: lngProps) => {
  const { t } = await useTranslation(lng);

  return (
    <>
      <PageWrapper>
        <div className="mx-auto flex w-full flex-col">
          <Category category={t('page.products.category')} subcategory={t('page.products.subcategory')} />
          <Products lng={lng} />
        </div>
      </PageWrapper>
    </>
  );
};

export default ProductsPage;
