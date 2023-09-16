import Image from 'next/image';

import Link from 'next/link';
import { useTranslation } from '../i18n';

export type lngProps = {
  params: {
    lng: string;
  };
};

const Home = async ({ params: { lng } }: lngProps) => {
  const { t } = await useTranslation(lng);

  // const [loadingPage, setLoadingPage] = useState(true);
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     setLoadingPage(false);
  //   }
  // }, []);

  // console.log(loadingPage);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <>
        <h1>{t('greetings')} - Home Page</h1>
        <Link href={`/${lng}/second-page`}>second page</Link>
        <Link href={`/${lng}/client-page`}>client page</Link>
      </>
    </div>
  );
};

export default Home;
