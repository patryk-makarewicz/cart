import Image from 'next/image';

import { ChangeEvent } from 'react';

import { ArtworksListSortMethod } from '@/api/artworks/artworks.model';
import SortIcon from '@/assets/sort.svg';
import { useTranslation } from '@/i18n/client';

type SortProductsProps = {
  params: {
    sort: ArtworksListSortMethod;
    filters: string[];
  };
  handleSelectSortMethod: (event: ChangeEvent<HTMLSelectElement>) => void;
  lng: string;
};

export const SortProducts = ({ params, handleSelectSortMethod, lng }: SortProductsProps) => {
  const { t } = useTranslation(lng);

  const SortOptions = [
    { value: ArtworksListSortMethod.DEFAULT, label: t('components.sort.sortMethods.default') },
    { value: ArtworksListSortMethod.PRICE, label: t('components.sort.sortMethods.priceAsc') },
    { value: ArtworksListSortMethod.PRICE_DESC, label: t('components.sort.sortMethods.priceDesc') },
    { value: ArtworksListSortMethod.NAME, label: t('components.sort.sortMethods.nameAsc') },
    { value: ArtworksListSortMethod.NAME_DESC, label: t('components.sort.sortMethods.nameDesc') }
  ];

  return (
    <div className="flex justify-end">
      <Image className="mr-2" priority src={SortIcon} alt="Sort icon" />
      <span className="text-appGray">{t('components.sort.sortBy')}:</span>
      <select onChange={handleSelectSortMethod} value={params.sort} className="rounded-md bg-appBlueLight">
        {SortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
