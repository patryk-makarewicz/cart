import { ChangeEvent } from 'react';

import { ArtworksListSortMethod } from '@/api/artworks/artworks.model';
import { useTranslation } from '@/i18n/client';

type SortProductsProps = {
  handleSelectSortMethod: (event: ChangeEvent<HTMLSelectElement>) => void;
  lng: string;
};

export const SortProducts = ({ handleSelectSortMethod, lng }: SortProductsProps) => {
  const { t } = useTranslation(lng);

  const SortOptions = [
    { value: ArtworksListSortMethod.DEFAULT, label: t('components.sortMethods.default') },
    { value: ArtworksListSortMethod.PRICE, label: t('components.sortMethods.priceAsc') },
    { value: ArtworksListSortMethod.PRICE_DESC, label: t('components.sortMethods.priceDesc') },
    { value: ArtworksListSortMethod.NAME, label: t('components.sortMethods.nameAsc') },
    { value: ArtworksListSortMethod.NAME_DESC, label: t('components.sortMethods.nameDesc') }
  ];

  return (
    <div>
      <select onChange={handleSelectSortMethod} className="w-32">
        {SortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
