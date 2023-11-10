'use client';

import Image from 'next/image';

import LogoNext from '@/assets/logo/next.png';
import LogoReact from '@/assets/logo/react.png';
import LogoRedux from '@/assets/logo/redux.png';
import LogoTailwind from '@/assets/logo/tailwind.png';
import LogoTypescript from '@/assets/logo/ts.png';
import { usePhotoLoading } from '@/hooks/usePhotoLoading';
import { Placeholder } from '@/components/placeholder';

export const TechList = () => {
  const { onLoad, loaded, refPhoto } = usePhotoLoading();

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
    <ul>
      {techLogos.map((tech) => (
        <li key={tech.description} className="flex items-center">
          <div className="my-3 mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-white p-1">
            <div className="h-6 w-6 overflow-hidden rounded-full">
              <Placeholder hide={loaded} />
              <Image
                priority
                ref={refPhoto}
                onLoad={onLoad}
                src={tech.logo}
                alt={tech.alt}
                className={`${!loaded ? 'opacity-0' : 'animate-fadeIn opacity-100'} h-6 w-6 object-cover`}
              />
            </div>
          </div>
          {tech.description}
        </li>
      ))}
    </ul>
  );
};
