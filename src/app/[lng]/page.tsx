import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '../i18n';
import Logo from '../../assets/logo_black.svg';

export type lngProps = {
  params: {
    lng: string;
  };
};

const Home = async ({ params: { lng } }: lngProps) => {
  const { t } = await useTranslation(lng);

  return (
    <div className=" flex h-[calc(100vh_-_112.5px)] flex-col items-center justify-between px-2">
      <div className="m-auto flex flex-col items-center text-center text-xl font-semibold">
        <Image priority src={Logo} width={30} height={36} alt="Logo makaDev" className="my-3" />
        {t('greetings')}
      </div>
      {/* <Link href={`/${lng}/second-page`}>second page</Link>
      <Link href={`/${lng}/client-page`}>client page</Link> */}
    </div>
  );
};

export default Home;
