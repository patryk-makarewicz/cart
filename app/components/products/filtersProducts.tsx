import { ChangeEvent } from 'react';

import { ArtworksListSortMethod, FiltersParams } from '@/api/artworks/artworks.model';
import { useTranslation } from '@/i18n/client';
import { Button } from '../button';
import { setResetFilters } from '@/redux/features/productsSlice';
import { useAppDispatch } from '@/redux/hooks';

type FilterProductsProps = {
  params: {
    sort: ArtworksListSortMethod;
    filters: FiltersParams;
  };
  handleCheckboxChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleCheckboxRangeChange: (event: ChangeEvent<HTMLInputElement>) => void;
  lng: string;
};

export const FilterProducts = ({
  params,
  handleCheckboxChange,
  handleCheckboxRangeChange,
  lng
}: FilterProductsProps) => {
  const { t } = useTranslation(lng);
  const dispatch = useAppDispatch();

  const FilterOptions = [
    { value: 'pets', label: t('components.filters.pets') },
    { value: 'people', label: t('components.filters.people') },
    { value: 'cities', label: t('components.filters.cities') },
    { value: 'food', label: t('components.filters.food') },
    { value: 'premium', label: t('components.filters.premium') },
    { value: 'landmarks', label: t('components.filters.landmarks') },
    { value: 'nature', label: t('components.filters.nature') }
  ];

  const RangeOptions = [
    { value: 'lower', label: t('components.range.lower') },
    { value: 'middle', label: t('components.range.middle') },
    { value: 'higher', label: t('components.range.higher') },
    { value: 'more', label: t('components.range.more') }
  ];

  return (
    <div className="flex min-w-[160px] flex-col pt-3">
      <p className="mb-5 font-semibold">{t('components.products.category')}</p>
      {FilterOptions.map((option) => (
        <label key={option.value} className="flex items-start">
          <input
            type="checkbox"
            value={option.value}
            checked={params.filters.category.includes(option.value)}
            onChange={handleCheckboxChange}
            className="mb-5 mr-3 h-5 w-5"
            style={{ accentColor: '#0369a1' }}
          />
          {option.label}
        </label>
      ))}
      <div className="mb-4 border-b-2 border-s-appGray" />
      <p className="mb-5 font-semibold">{t('components.products.range')}</p>
      {RangeOptions.map((option) => (
        <label key={option.value} className="flex items-start">
          <input
            type="checkbox"
            value={option.value}
            checked={params.filters.range.includes(option.value)}
            onChange={handleCheckboxRangeChange}
            className="mb-5 mr-3 h-5 w-5"
            style={{ accentColor: '#0369a1' }}
          />
          {option.label}
        </label>
      ))}
      <div className="mb-4 border-b-2 border-s-appGray" />
      <Button kind="secondary" onClick={() => dispatch(setResetFilters())}>
        {t('components.products.resetButton')}
      </Button>
    </div>
  );
};
