'use client';

import Link from 'next/link';
import { useTranslation } from '../../i18n/client';

import { useEffect, useState } from 'react';
import { lngProps } from '../page';
import { Button } from '@/components/button/button';

const ClientPage = ({ params: { lng } }: lngProps) => {
  const { t } = useTranslation(lng);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('use client page');
  }, []);
  return (
    <>
      <h1>{t('greetings')} - client page!</h1>
      <p>{t('footer.copyright')}</p>
      <p>{counter}</p>
      <div>
        <button onClick={() => setCounter(Math.max(0, counter - 1))}>-</button>
        <button onClick={() => setCounter(Math.min(10, counter + 1))}>+</button>
      </div>
      <Link href={`/${lng}`}>
        <Button>{t('Back to Home')}</Button>
      </Link>
    </>
  );
};

export default ClientPage;
