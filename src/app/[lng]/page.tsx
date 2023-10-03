import Image from 'next/image';
import Logo from '../../assets/logo_black.svg';
import { useTranslation } from '../i18n';
import Link from 'next/link';
import { Button } from '@/components/button';
import { Chatbot } from '@/components/chatbot';

export type lngProps = {
  params: {
    lng: string;
  };
};

const Home = async ({ params: { lng } }: lngProps) => {
  const { t } = await useTranslation(lng);

  return (
    <div className=" flex flex-col items-center justify-between">
      <div className="m-auto flex flex-col items-center text-center text-xl font-semibold">
        <Image priority src={Logo} width={30} height={36} alt="Logo makaDev" className="my-3" />
        {t('greetings')}
        <Link href={`/${lng}/products`} className="my-3">
          <Button>{t('page.home.button')}</Button>
        </Link>
      </div>
      <Chatbot lng={lng} />
    </div>
  );
};

export default Home;

//TODO: create cart item list component
//TODO: create cart summary paragraphs
//TODO: add empty cart style / icon
//TODO: add in cart view add or remove item from cart
//TODO: send cart -> basic solution console.log it
//TODO: products list - no data state
//TODO: products list - show big photo and bestsellers
//TODO: show loader when is fetching data from api
//TODO: show loader on change page
//TODO: add animation on change page
//TODO: pass items as children
//TODO: add sorting list
//TODO: add filtering list
//TODO: add terms and cookies
//TODO: improvement UI
//TODO: add log in/out
