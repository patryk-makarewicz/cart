import Image from 'next/image';
import Link from 'next/link';

import { PageWrapper } from '@/[lng]/pageWrapper';

import bg from '@/assets/bg_home.jpeg';
import LogoMakaDev from '@/assets/logo/makaDev.png';
import LogoNext from '@/assets/logo/next.png';
import LogoReact from '@/assets/logo/react.png';
import LogoRedux from '@/assets/logo/redux.png';
import LogoTailwind from '@/assets/logo/tailwind.png';
import LogoTypescript from '@/assets/logo/ts.png';
import { Button } from '@/components/button';
import { Chatbot } from '@/components/chatbot';
import { useTranslation } from '@/i18n';

export type lngProps = {
  params: {
    lng: string;
  };
};

const Home = async ({ params: { lng } }: lngProps) => {
  const { t } = await useTranslation(lng);

  const techLogos = [
    {
      logo: LogoNext,
      description: 'Next.js 14',
      alt: 'Logo Next.js'
    },
    {
      logo: LogoReact,
      description: 'React.js 18',
      alt: 'Logo React.js'
    },
    {
      logo: LogoRedux,
      description: 'Redux Toolkit',
      alt: 'Logo Redux Toolkit'
    },
    {
      logo: LogoTypescript,
      description: 'TypeScript',
      alt: 'Logo TypeScript'
    },
    {
      logo: LogoTailwind,
      description: 'Tailwind',
      alt: 'Logo Tailwind'
    }
  ];

  return (
    <>
      <PageWrapper>
        <div
          style={{
            backgroundImage: `url(${bg.src})`,
            filter: 'blur(8px)'
          }}
          className="object-fit fixed left-0 top-0 z-0 h-full min-h-full w-full bg-cover bg-center bg-no-repeat"
        />
        <div className="m-auto flex flex-col items-center">
          <div className="flex max-w-[486px] animate-fadeIn flex-col items-center justify-center rounded-md border border-appGrayLight p-3 backdrop-blur-xl">
            <Image priority src={LogoMakaDev} width={140} height={140} alt="Logo makaDev" className="my-3" />
            <p className="text-center text-lg font-semibold">{t('page.home.greetings')}</p>
            <p className="text-center">{t('page.home.technologies')}</p>
            <ul>
              {techLogos.map((tech) => (
                <li key={tech.description} className="flex items-center">
                  <div className="my-3 mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-white p-1">
                    <Image priority src={tech.logo} width={24} alt={tech.alt} />
                  </div>
                  {tech.description}
                </li>
              ))}
            </ul>
            <Link href={`/${lng}/products`} className="my-3">
              <Button>{t('page.home.button')}</Button>
            </Link>
          </div>
        </div>
      </PageWrapper>
      <Chatbot lng={lng} />
    </>
  );
};

export default Home;

//-----------------------------------------------
//TODO: add price range filters
//TODO: add limit for one item in cart
//TODO: send cart - add info with success or error
//TODO: add tests
//-----------------------------------------------
//TODO: add terms and cookies
//TODO: add log in/out
//TODO: improvement UI - home tab - animate background
//TODO: improvement UI - add background in products and cart tabs
//TODO: improvement UI - cart tab
//-----------------------------------------------
