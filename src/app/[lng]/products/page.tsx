import { ProductsList } from '@/components/products';
import { lngProps } from '../page';
import { useTranslation } from '@/app/i18n';
import { getArtworks } from '@/api/artworks/artworks.api';
import { Chatbot } from '@/components/chatbot';

const ProductsPage = async ({ params: { lng } }: lngProps) => {
  const { t } = await useTranslation(lng);
  const artworks = await getArtworks();

  return (
    <>
      <ProductsList records={artworks.records} />
      <Chatbot lng={lng} />
    </>
  );
};

export default ProductsPage;
