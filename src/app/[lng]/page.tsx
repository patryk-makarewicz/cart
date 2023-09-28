import Image from 'next/image';
import Logo from '../../assets/logo_black.svg';
import { useTranslation } from '../i18n';
import { BASE_URL, headers } from '@/api/config';
import { ArtworksListModel } from '@/api/artworks/artworks.model';
import { ProductsList } from '@/components/products';

export type lngProps = {
  params: {
    lng: string;
  };
};

const getArtworks = async (): Promise<ArtworksListModel> => {
  const data = await fetch(`${BASE_URL}/artworks?view=default`, { headers, next: { revalidate: 0 } });
  const artworks = await data.json();

  return artworks;
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
    </div>
  );
};

export default Home;
