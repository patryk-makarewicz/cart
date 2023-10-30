import Image from 'next/image';
import Link from 'next/link';

import { PageWrapper } from '@/[lng]/pageWrapper';

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
        <div className="m-auto flex flex-col items-center">
          <div className="max-w-[486px] animate-fadeIn mx-auto my-3 flex flex-col items-center justify-center rounded-md border border-appGrayLight bg-white p-3">
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
//TODO: improvement UI - home page - add animation background from drei
//TODO: improvement UI - products list - show big photo and bestsellers
//TODO: improvement UI - layout products page and mobile version view
//TODO: improvement UI - add custom styles to dropdown
//TODO: improvement UI - add custom styles to checkbox
//TODO: improvement UI - cart tab
//-----------------------------------------------
//TODO: add price range filters
//TODO: add limit for one item in cart
//TODO: send cart -> basic solution console.log it
//TODO: add tests
//-----------------------------------------------
//TODO: add terms and cookies
//TODO: add log in/out
//-----------------------------------------------
