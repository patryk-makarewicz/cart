import { getArtworksMock, getFeaturedMock } from '@/api/artworks/artworks.mock';
import { ArtworkModel, ArtworksListDTO, ArtworksListSortMethod } from '@/api/artworks/artworks.model';
import { BASE_URL, headers, useAPImocks } from '@/api/config';

export const getArtworks = async (sort: ArtworksListSortMethod, filters: string[]): Promise<ArtworksListDTO> => {
  if (useAPImocks) {
    return getArtworksMock();
  } else {
    const filterQuery =
      filters.length > 0
        ? `&filterByFormula=AND(OR(${filters.map((filter) => `{category}="${filter}"`).join(', ')}))`
        : '';

    const data = await fetch(`${BASE_URL}/artworks?view=default&${sort}${filterQuery}`, {
      headers,
      next: { revalidate: 0 }
    });

    const artworks = await data.json();
    return artworks;
  }
};

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
