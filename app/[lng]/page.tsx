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
        <div className="m-auto flex flex-col items-center text-center text-xl font-semibold">
          <Image priority src={Logo} width={200} height={200} alt="Logo makaDev" className="my-3" />
          {t('greetings')}
          <Link href={`/${lng}/products`} className="my-3">
            <Button>{t('page.home.button')}</Button>
          </Link>
        </div>
      </PageWrapper>
      <Chatbot lng={lng} />
    </>
  );
};

export default Home;

//TODO: move filtering and sort method to Redux
//TODO: add styles to sorting and filtering
//-----------------------------------------------
//TODO: upgrade to next 14
//-----------------------------------------------
//TODO: home page - add animation background from drei lib
//TODO: products list - show big photo and bestsellers
//TODO: improvement UI
//-----------------------------------------------
//TODO: add limit for one item in cart
//TODO: send cart -> basic solution console.log it
//TODO: add terms and cookies
//TODO: add log in/out
