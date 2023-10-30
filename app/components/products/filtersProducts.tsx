import { ChangeEvent } from 'react';

import { ArtworksListSortMethod } from '@/api/artworks/artworks.model';
import { useTranslation } from '@/i18n/client';

type FilterProductsProps = {
  params: {
    sort: ArtworksListSortMethod;
    filters: string[];
  };
  handleCheckboxChange: (event: ChangeEvent<HTMLInputElement>) => void;
  lng: string;
};

export const FilterProducts = ({ params, handleCheckboxChange, lng }: FilterProductsProps) => {
  const { t } = useTranslation(lng);

  const FilterOptions = [
    { value: 'pets', label: t('components.filters.pets') },
    { value: 'people', label: t('components.filters.people') },
    { value: 'cities', label: t('components.filters.cities') },
    { value: 'food', label: t('components.filters.food') },
    { value: 'premium', label: t('components.filters.premium') },
    { value: 'landmarks', label: t('components.filters.landmarks') },
    { value: 'nature', label: t('components.filters.nature') }
  ];

  return (
    <div className="flex flex-col min-w-[140px] pt-3">
      <p className="mb-5 font-semibold">{t('components.products.category')}</p>
      {FilterOptions.map((option) => (
        <label key={option.value} className="flex items-start">
          <input
            type="checkbox"
            value={option.value}
            checked={params.filters.includes(option.value)}
            onChange={handleCheckboxChange}
            className="mr-3 mb-5 rounded h-5 w-5"
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};
