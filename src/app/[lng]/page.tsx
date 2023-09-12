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

        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
      </>
    </div>
  );
};

export default Home;
