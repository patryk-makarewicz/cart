import { getFeatured } from '@/api/artworks';
import { useTranslation } from '@/i18n';

export const Featured = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng);
  const featuredProduct = await getFeatured();

  if (!featuredProduct) {
    return null;
  }

  return (
    <div className="mb-12 border-b border-appGrayLight pb-14">
      <div className="mb-6 flex items-center justify-between">
        <p className="text-xl font-bold">{featuredProduct.fields.name}</p>
      </div>
      <div className="relative">
        <img
          src={featuredProduct.fields.imageSrc}
          alt={featuredProduct.fields.imageSrc}
          className="mb-4 max-h-[500px] w-full animate-fadeIn object-cover"
        />
        <div className="absolute bottom-0 left-0 bg-appBlueLight px-8 py-2 font-semibold">
          {t('page.products.photoOfTheDay')}
        </div>
      </div>
      <div className="flex flex-col justify-center lg:flex-row lg:justify-between">
        <p style={{ columns: 'auto 15rem', maxWidth: '600px' }} className="mb-4 lg:mb-0">
          {featuredProduct.fields.description}
        </p>
        <div className="text-left lg:text-right">
          <p className="mb-2 font-semibold">{t('page.products.details')}</p>
          <p className="mb-2">
            {t('page.products.size')}: {featuredProduct.fields.dimensionsWidth} x{' '}
            {featuredProduct.fields.dimensionsHeight} {t('page.products.pixel')}
          </p>
          <p>
            {t('page.products.size')}:{' '}
            {featuredProduct.fields.size
              ? `${featuredProduct.fields.size / 1000} ${t('page.products.mb')}`
              : `${t('components.products.noData')}`}
          </p>
        </div>
      </div>
    </div>
  );
};
