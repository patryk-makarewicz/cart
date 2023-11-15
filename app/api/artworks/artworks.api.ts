import { getArtworksMock, getFeaturedMock } from '@/api/artworks/artworks.mock';
import { ArtworkModel } from '@/api/artworks/artworks.model';
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
}): Promise<any> => {
  if (useAPImocks) {
    return getArtworksMock();
  } else {
    const categoryQuery =
      params.filters.category.length > 0
        ? `OR(${params.filters.category.map((filter) => `{category}="${filter}"`).join(',')})`
        : '';

    let rangeQuery = '';

    switch (params.filters.range) {
      case 'lower':
        rangeQuery = `AND({price}<20)`;
        break;
      case 'middle':
        rangeQuery = `AND({price}>20,{price}<100)`;
        break;
      case 'higher':
        rangeQuery = `AND({price}>100,{price}<200)`;
        break;
      case 'more':
        rangeQuery = `AND({price}>200)`;
        break;
      case 'none':
        rangeQuery = ``;
        break;
      default:
        rangeQuery = ``;
        break;
    }

    const rangeFragment = categoryQuery && rangeQuery ? `,${rangeQuery}` : rangeQuery;

    const response = await axios.get(
      `${BASE_URL}/artworks?view=default&${params.sort}&filterByFormula=AND(${categoryQuery}${rangeFragment})`,
      {
        headers
      }
    );

    return response.data;
  }
};
