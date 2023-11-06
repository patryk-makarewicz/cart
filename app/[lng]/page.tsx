import Image from 'next/image';
import Link from 'next/link';

import { PageWrapper } from '@/[lng]/pageWrapper';

import bg from '@/assets/bg_home.jpeg';
import Logo from '@/assets/logo_makaDev.png';
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

  return (
    <>
      <PageWrapper>
        <div
          style={{
            backgroundImage: `url(${bg.src})`,
            filter: 'blur(8px)'
          }}
          className="w-full h-full bg-cover bg-center bg-no-repeat z-0 absolute left-0 top-0"
        />
        <div className="m-auto flex flex-col items-center z-10">
          <div className="max-w-[486px] animate-fadeIn backdrop-blur-xl flex flex-col items-center justify-center rounded-md border border-appGrayLight p-3">
            <Image priority src={Logo} width={200} height={200} alt="Logo makaDev" className="my-3" />
            <p className="text-center text-lg font-semibold">{t('page.home.greetings')}</p>
            <p className="text-center">{t('page.home.technologies')}</p>
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
//TODO: improvement UI - layout products page and mobile version view
//TODO: improvement UI - add custom styles to dropdown
//TODO: improvement UI - add custom styles to checkbox
//TODO: improvement UI - add background in products and cart tabs
//TODO: improvement UI - cart tab
//-----------------------------------------------
//TODO: add price range filters
//TODO: add limit for one item in cart
//TODO: send cart -> basic solution console.log it
//TODO: add tests
//-----------------------------------------------
//TODO: add terms and cookies
//TODO: add log in/out
//TODO: improvement UI - home tab - animate background
//-----------------------------------------------
