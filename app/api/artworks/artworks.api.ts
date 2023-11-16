import { getArtworksMock, getFeaturedMock } from '@/api/artworks/artworks.mock';
import { ArtworkModel, ArtworksListDTO } from '@/api/artworks/artworks.model';
import { BASE_URL, headers, useAPImocks } from '@/api/config';
import axios from 'axios';

export const getFeatured = async (): Promise<ArtworkModel> => {
  if (useAPImocks) {
    return getFeaturedMock();
  } else {
    const data = await fetch(`${BASE_URL}/artworks/recp7Ph6m0VYKoBkO`, {
      headers
    });

    const featured = await data.json();
    return featured;
  }
};

export const getArtworksList = async (params: {
  sort: string;
  filters: { category: string[]; range: string };
}): Promise<ArtworksListDTO> => {
  if (useAPImocks) {
    return getArtworksMock();
  }

  const { category, range } = params.filters;

  const categoryQuery =
    category.length > 0 ? `OR(${category.map((filter) => `{category}="${filter}"`).join(',')})` : '';
  const rangeQueryOptions: { [key: string]: string } = {
    lower: `AND({price}<20)`,
    middle: `AND({price}>20,{price}<100)`,
    higher: `AND({price}>100,{price}<200)`,
    more: `AND({price}>200)`,
    none: ``
  };

  const rangeQuery = rangeQueryOptions[range];
  const rangeFragment = categoryQuery && rangeQuery ? `,${rangeQuery}` : rangeQuery;

  const response = await axios.get(
    `${BASE_URL}/artworks?view=default&${params.sort}&filterByFormula=AND(${categoryQuery}${rangeFragment})`,
    {
      headers
    }
  );

  return response.data;
};
