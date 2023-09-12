import Link from 'next/link';
import { useTranslation } from '../../i18n';

import { Trans } from 'react-i18next/TransWithoutContext';
import { languages } from '../../i18n/settings';
import { lngProps } from '../page';

const SecondPage = async ({ params: { lng } }: lngProps) => {
  const { t } = await useTranslation(lng);

  return (
    <>
      <h1>{t('greetings')} - second page!</h1>
      <p>{t('footer.copyright')}</p>
      <h3>
        <Trans i18nKey="languageSwitcher" t={t}>
          {/* @ts-ignore */}
          Switch from <strong>{{ lng }}</strong> to:{' '}
        </Trans>
        {languages
          .filter((l) => lng !== l)
          .map((l, index) => {
            return (
              <span key={l}>
                {index > 0 && ' or '}
                <Link href={`/${l}`}>{l}</Link>
              </span>
            );
          })}
      </h3>
      <Link href={`/${lng}`}>back</Link>
    </>
  );
};

export default SecondPage;
