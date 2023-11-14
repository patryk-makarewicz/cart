import Image from 'next/image';

import Logo from '@/assets/logo/makaDev.png';
import { useTranslation } from '@/i18n/client';
import { usePhotoLoading } from '@/hooks/usePhotoLoading';
import { Placeholder } from '../placeholder';

export const Footer = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng);
  const date = new Date();
  const year = date.getFullYear();
  const { onLoad, loaded, refPhoto } = usePhotoLoading();

  return (
    <footer className="relative border-t border-appGrayLight bg-white">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-center p-2.5">
        <div className="mr-3 h-[40px] w-[40px] overflow-hidden rounded-full">
          <Placeholder hide={loaded} />
          <Image
            priority
            ref={refPhoto}
            onLoad={onLoad}
            src={Logo}
            width={40}
            height={40}
            alt="Logo makaDev"
            className={`${!loaded ? 'opacity-0' : 'animate-fadeIn opacity-100'} h-full w-full object-cover`}
          />
        </div>
        <p className="text-center text-sm">{t('footer.copyright', { year: year })}</p>
      </div>
    </footer>
  );
};
