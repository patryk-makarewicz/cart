import Link from 'next/link';
import { useTranslation } from '../i18n';

export type lngProps = {
  params: {
    lng: string;
  };
};

const Home = async ({ params: { lng } }: lngProps) => {
  const { t } = await useTranslation(lng);

  return (
    <div className="flex max-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-xl font-semibold">{t('greetings')}</h1>
      {/* <Link href={`/${lng}/second-page`}>second page</Link>
      <Link href={`/${lng}/client-page`}>client page</Link> */}
    </div>
  );
};

export default Home;
