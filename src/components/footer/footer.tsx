import Image from 'next/image';
import Logo from '../../assets/logo_black.svg';
import { useTranslation } from '@/app/i18n/client';

const Footer = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng);
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-center p-2.5">
        <Image priority src={Logo} width={30} height={36} alt="Logo makaDev" className="mr-3" />
        <p className="text-center text-sm">{t('footer.copyright', { year: year })}</p>
      </div>
    </footer>
  );
};

export default Footer;
