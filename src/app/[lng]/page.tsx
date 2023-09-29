import Image from 'next/image';
import Logo from '../../assets/logo_black.svg';
import { useTranslation } from '../i18n';
import { ProductsList } from '@/components/products';
import { getArtworks } from '@/api/artworks/artworks.api';
import { Chatbot } from '@/components/chatbot';

export type lngProps = {
  params: {
    lng: string;
  };
};

const Home = async ({ params: { lng } }: lngProps) => {
  const { t } = await useTranslation(lng);

  const artworks = await getArtworks();

  return (
    <div className=" flex h-[calc(100vh_-_112.5px)] flex-col items-center justify-between px-2">
      <div className="m-auto flex flex-col items-center text-center text-xl font-semibold">
        <Image priority src={Logo} width={30} height={36} alt="Logo makaDev" className="my-3" />
        {t('greetings')}
      </div>
      <div>
        <ProductsList records={artworks.records} />
      </div>
      <Chatbot lng={lng} />
    </div>
  );
};

export default Home;
